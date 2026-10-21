import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { MessageCircle, UserCircle2, Loader2, AlertCircle, Send, ImagePlus, X, Pin } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import { supabase } from '../supabase';
import { useLanguage } from '../context/LanguageContext';

const Comment = memo(({ comment, formatDate, isPinned = false, language }) => (
    <div 
        className={`px-4 pt-4 pb-3 rounded-xl border transition-all group hover:shadow-lg hover:-translate-y-0.5 ${
            isPinned 
                ? 'bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border-indigo-400/50 hover:border-indigo-400 shadow-md' 
                : 'bg-white/[0.06] border-white/15 hover:bg-white/[0.1] hover:border-white/25 shadow-sm'
        }`}
    >
        {isPinned && (
            <div className="flex items-center gap-2 mb-3 text-indigo-300">
                <Pin className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                    {language === 'en' ? 'Pinned Comment' : 'Komentar Tersemat'}
                </span>
            </div>
        )}
        <div className="flex items-start gap-3">
            {comment.profile_image ? (
                <img
                    src={comment.profile_image}
                    alt={`${comment.user_name}'s profile`}
                    className={`w-10 h-10 rounded-full object-cover border-2 flex-shrink-0 shadow-sm ${
                        isPinned ? 'border-indigo-400' : 'border-indigo-400/40'
                    }`}
                    loading="lazy"
                />
            ) : (
                <div className={`p-2 rounded-full text-indigo-300 group-hover:bg-indigo-500/30 transition-colors ${
                    isPinned ? 'bg-indigo-500/30' : 'bg-indigo-500/20'
                }`}>
                    <UserCircle2 className="w-5 h-5" />
                </div>
            )}
            <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1.5">
                    <div className="flex items-center gap-2">
                        <h4 className={`font-bold text-sm truncate ${
                            isPinned ? 'text-indigo-200' : 'text-white'
                        }`}>
                            {comment.user_name}
                        </h4>
                        {isPinned && (
                            <span className="px-2 py-0.5 text-[11px] font-bold bg-indigo-500/25 text-indigo-200 rounded-full border border-indigo-400/30">
                                Admin
                            </span>
                        )}
                    </div>
                    <span className="text-xs text-indigo-200/80 whitespace-nowrap font-medium">
                        {formatDate(comment.created_at)}
                    </span>
                </div>
                <p className="text-gray-100 text-sm break-words leading-relaxed font-normal">
                    {comment.content}
                </p>
            </div>
        </div>
    </div>
));

const CommentForm = memo(({ onSubmit, isSubmitting, language }) => {
    const [newComment, setNewComment] = useState('');
    const [userName, setUserName] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const textareaRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleImageChange = useCallback((e) => {
        const file = e.target.files[0];
        if (file) {
            // Check file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                alert(language === 'en'
                    ? 'File size must be less than 5MB. Please choose a smaller image.'
                    : 'Ukuran berkas harus kurang dari 5MB. Silakan pilih foto yang lebih kecil.');
                if (e.target) e.target.value = '';
                return;
            }
            
            // Check file type
            if (!file.type.startsWith('image/')) {
                alert(language === 'en'
                    ? 'Please select a valid image file.'
                    : 'Silakan pilih berkas gambar yang valid.');
                if (e.target) e.target.value = '';
                return;
            }
            
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    }, [language]);

    const handleTextareaChange = useCallback((e) => {
        setNewComment(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (!newComment.trim() || !userName.trim()) return;
        
        onSubmit({ newComment, userName, imageFile });
        setNewComment('');
        setUserName('');
        setImagePreview(null);
        setImageFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        if (textareaRef.current) textareaRef.current.style.height = 'auto';
    }, [newComment, userName, imageFile, onSubmit]);

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5" data-aos="fade-up" data-aos-duration="600">
                <label className="block text-xs font-semibold uppercase tracking-wider text-indigo-200">
                    {language === 'en' ? 'Your Name' : 'Nama Anda'} <span className="text-red-400">*</span>
                </label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    maxLength={25}
                    placeholder={language === 'en' ? 'Enter your name' : 'Masukkan nama Anda'}
                    className="w-full p-3 rounded-xl bg-white/[0.06] border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all font-normal"
                    required
                />
            </div>

            <div className="space-y-1.5" data-aos="fade-up" data-aos-duration="700">
                <label className="block text-xs font-semibold uppercase tracking-wider text-indigo-200">
                    {language === 'en' ? 'Your Comment' : 'Tulis Komentar'} <span className="text-red-400">*</span>
                </label>
                <textarea
                    ref={textareaRef}
                    value={newComment}
                    maxLength={300}
                    onChange={handleTextareaChange}
                    placeholder={language === 'en' ? 'Write your comment here...' : 'Tulis komentar Anda di sini...'}
                    className="w-full p-3.5 rounded-xl bg-white/[0.06] border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all resize-none min-h-[100px] font-normal"
                    required
                />
            </div>

            <div className="space-y-1.5" data-aos="fade-up" data-aos-duration="800">
                <label className="block text-xs font-semibold uppercase tracking-wider text-indigo-200">
                    {language === 'en' ? 'Profile Photo' : 'Foto Profil'}{' '}
                    <span className="text-gray-300 font-normal">
                        ({language === 'en' ? 'optional' : 'opsional'})
                    </span>
                </label>
                <div className="flex items-center gap-4 p-3.5 bg-white/[0.06] border border-white/15 rounded-xl">
                    {imagePreview ? (
                        <div className="flex items-center gap-4">
                            <img
                                src={imagePreview}
                                alt="Profile preview"
                                className="w-14 h-14 rounded-full object-cover border-2 border-indigo-400 shadow-md"
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    setImagePreview(null);
                                    setImageFile(null);
                                    if (fileInputRef.current) fileInputRef.current.value = '';
                                }}
                                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 transition-all text-xs font-semibold"
                            >
                                <X className="w-4 h-4" />
                                <span>{language === 'en' ? 'Remove Photo' : 'Hapus Foto'}</span>
                            </button>
                        </div>
                    ) : (
                        <div className="w-full">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                accept="image/*"
                                className="hidden"
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-500/15 text-indigo-200 hover:bg-indigo-500/25 transition-all border border-dashed border-indigo-400/50 hover:border-indigo-400 font-medium text-xs sm:text-sm group"
                            >
                                <ImagePlus className="w-4 h-4 group-hover:scale-110 transition-transform text-indigo-300" />
                                <span>{language === 'en' ? 'Choose Profile Photo' : 'Pilih Foto Profil'}</span>
                            </button>
                            <p className="text-center text-gray-300 text-xs mt-1.5 font-normal">
                                {language === 'en' ? 'Max file size: 5MB' : 'Ukuran berkas maks: 5MB'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                data-aos="fade-up"
                data-aos-duration="900"
                className="relative w-full h-11 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl font-semibold text-white text-sm overflow-hidden group transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-md"
            >
                <div className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{language === 'en' ? 'Posting...' : 'Mengirim...'}</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            <span>{language === 'en' ? 'Post Comment' : 'Kirim Komentar'}</span>
                        </>
                    )}
                </div>
            </button>
        </form>
    );
});

const Komentar = () => {
    const { language } = useLanguage();
    const [comments, setComments] = useState([]);
    const [pinnedComment, setPinnedComment] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
        });
    }, []);

    // Fetch pinned comment
    useEffect(() => {
        const fetchPinnedComment = async () => {
            try {
                const { data, error } = await supabase
                    .from('portfolio_comments')
                    .select('*')
                    .eq('is_pinned', true)
                    .single();
                
                if (error && error.code !== 'PGRST116') {
                    console.error('Error fetching pinned comment:', error);
                    return;
                }
                
                if (data) {
                    setPinnedComment(data);
                }
            } catch (err) {
                console.error('Error fetching pinned comment:', err);
            }
        };

        fetchPinnedComment();
    }, []);

    // Fetch regular comments (excluding pinned) and set up real-time subscription
    useEffect(() => {
        const fetchComments = async () => {
            const { data, error } = await supabase
                .from('portfolio_comments')
                .select('*')
                .eq('is_pinned', false)
                .order('created_at', { ascending: false });
            
            if (error) {
                console.error('Error fetching comments:', error);
                return;
            }
            
            setComments(data || []);
        };

        fetchComments();

        // Set up real-time subscription
        const subscription = supabase
            .channel('portfolio_comments')
            .on('postgres_changes', 
                { 
                    event: '*', 
                    schema: 'public', 
                    table: 'portfolio_comments',
                    filter: 'is_pinned=eq.false'
                }, 
                () => {
                    fetchComments();
                }
            )
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const uploadImage = useCallback(async (imageFile) => {
        if (!imageFile) return null;
        
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `profile-images/${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('profile-images')
            .upload(filePath, imageFile);

        if (uploadError) {
            throw uploadError;
        }

        const { data } = supabase.storage
            .from('profile-images')
            .getPublicUrl(filePath);

        return data.publicUrl;
    }, []);

    const handleCommentSubmit = useCallback(async ({ newComment, userName, imageFile }) => {
        setError('');
        setIsSubmitting(true);
        
        try {
            const profileImageUrl = await uploadImage(imageFile);
            
            const { error: insertError } = await supabase
                .from('portfolio_comments')
                .insert([
                    {
                        content: newComment,
                        user_name: userName,
                        profile_image: profileImageUrl,
                        is_pinned: false,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (insertError) {
                throw insertError;
            }
        } catch (err) {
            setError(language === 'en'
                ? 'Failed to post comment. Please try again.'
                : 'Gagal mengirim komentar. Silakan coba lagi.');
            console.error('Error adding comment: ', err);
        } finally {
            setIsSubmitting(false);
        }
    }, [uploadImage, language]);

    const formatDate = useCallback((timestamp) => {
        if (!timestamp) return '';
        const date = new Date(timestamp);
        const now = new Date();
        const diffMinutes = Math.floor((now - date) / (1000 * 60));
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMinutes < 1) return language === 'en' ? 'Just now' : 'Baru saja';
        if (diffMinutes < 60) return language === 'en' ? `${diffMinutes}m ago` : `${diffMinutes} mnt lalu`;
        if (diffHours < 24) return language === 'en' ? `${diffHours}h ago` : `${diffHours} jam lalu`;
        if (diffDays < 7) return language === 'en' ? `${diffDays}d ago` : `${diffDays} hari lalu`;

        return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'id-ID', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(date);
    }, [language]);

    // Calculate total comments (pinned + regular)
    const totalComments = comments.length + (pinnedComment ? 1 : 0);

    return (
        <div className="w-full bg-[#0D0D20] rounded-2xl border border-white/15 shadow-2xl overflow-hidden" data-aos="fade-up" data-aos-duration="800">
            <div className="p-5 border-b border-white/15 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30">
                        <MessageCircle className="w-5 h-5 text-indigo-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                        {language === 'en' ? 'Comments & Discussion' : 'Komentar & Diskusi'}{' '}
                        <span className="text-indigo-300">({totalComments})</span>
                    </h3>
                </div>
            </div>

            <div className="p-5 sm:p-6 space-y-6">
                {error && (
                    <div className="flex items-center gap-2 p-3.5 text-red-300 bg-red-500/15 border border-red-500/30 rounded-xl" data-aos="fade-in">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm font-medium">{error}</p>
                    </div>
                )}
                
                <div>
                    <CommentForm
                        onSubmit={handleCommentSubmit}
                        isSubmitting={isSubmitting}
                        language={language}
                    />
                </div>

                <div className="space-y-3.5 h-[320px] overflow-y-auto overflow-x-hidden custom-scrollbar pt-1 pr-1">
                    {/* Pinned Comment */}
                    {pinnedComment && (
                        <div>
                            <Comment 
                                comment={pinnedComment} 
                                formatDate={formatDate}
                                isPinned={true}
                                language={language}
                            />
                        </div>
                    )}
                    
                    {/* Regular Comments */}
                    {comments.length === 0 && !pinnedComment ? (
                        <div className="text-center py-10" data-aos="fade-in">
                            <UserCircle2 className="w-12 h-12 text-indigo-400 mx-auto mb-2 opacity-60" />
                            <p className="text-gray-200 text-sm font-medium">
                                {language === 'en'
                                    ? 'No comments yet. Start the conversation!'
                                    : 'Belum ada komentar. Jadilah yang pertama berkomentar!'}
                            </p>
                        </div>
                    ) : (
                        comments.map((comment) => (
                            <Comment 
                                key={comment.id} 
                                comment={comment} 
                                formatDate={formatDate}
                                isPinned={false}
                                language={language}
                            />
                        ))
                    )}
                </div>
            </div>
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(99, 102, 241, 0.5);
                    border-radius: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(99, 102, 241, 0.8);
                }
            `}</style>
        </div>
    );
};

export default Komentar;
