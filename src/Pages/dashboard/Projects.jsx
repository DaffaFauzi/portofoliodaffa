import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import {
  Plus,
  Trash2,
  Upload,
  FolderGit2,
  X,
  ImageIcon,
  ExternalLink,
  Github,
  Pencil,
} from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-10 group-hover:opacity-25 transition duration-500" />
    <div className="relative bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl h-full shadow-md">
      {children}
    </div>
  </div>
);

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => (
  <div className="space-y-1.5">
    <label className="text-xs text-indigo-200 uppercase tracking-wider font-semibold">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full bg-[#0d0d22] border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-gray-400 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all font-normal"
    />
  </div>
);

const SkeletonCard = () => (
  <div className="relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-10" />
    <div className="relative bg-white/5 border border-white/15 rounded-2xl p-4 flex flex-col gap-3">
      <div className="w-full aspect-[16/8] bg-white/5 animate-pulse rounded-xl" />
      <div className="h-4 bg-white/5 animate-pulse rounded-lg w-2/3" />
      <div className="h-3 bg-white/5 animate-pulse rounded-lg w-full" />
      <div className="h-3 bg-white/5 animate-pulse rounded-lg w-4/5" />
      <div className="flex gap-1.5 mt-1">
        <div className="h-5 w-16 bg-white/5 animate-pulse rounded-full" />
        <div className="h-5 w-12 bg-white/5 animate-pulse rounded-full" />
        <div className="h-5 w-20 bg-white/5 animate-pulse rounded-full" />
      </div>
      <div className="flex justify-between items-center pt-2 border-t border-white/10 mt-auto">
        <div className="flex gap-2">
          <div className="w-7 h-7 bg-white/5 animate-pulse rounded-lg" />
          <div className="w-7 h-7 bg-white/5 animate-pulse rounded-lg" />
        </div>
        <div className="flex gap-2">
          <div className="w-14 h-7 bg-white/5 animate-pulse rounded-lg" />
          <div className="w-16 h-7 bg-white/5 animate-pulse rounded-lg" />
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project, onDelete, onEdit }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Card>
      <div className="p-4 flex flex-col h-full">
        {project.Img && (
          <div className="w-full aspect-[16/8] rounded-xl mb-4 border border-white/15 overflow-hidden bg-white/5 shadow-sm">
            {!imgLoaded && (
              <div className="w-full h-full animate-pulse bg-white/5" />
            )}
            <img
              src={project.Img}
              alt={project.Title}
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0 absolute"}`}
            />
          </div>
        )}
        <h3 className="font-bold text-white text-base mb-1">
          {project.Title}
        </h3>
        {project.Description && (
          <p className="text-gray-200 text-xs mb-3 line-clamp-2 leading-relaxed font-normal">
            {project.Description}
          </p>
        )}
        {project.TechStack?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.TechStack.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/35 text-indigo-200 text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto flex items-center justify-between gap-2 pt-3 border-t border-white/10">
          <div className="flex gap-2">
            {project.Link && (
              <a
                href={project.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-white/20 text-gray-200 hover:text-white hover:border-white/40 transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.Github && (
              <a
                href={project.Github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-white/20 text-gray-200 hover:text-white hover:border-white/40 transition-colors shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(project)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 text-xs font-semibold transition-colors"
            >
              <Pencil className="w-3 h-3" /> Edit
            </button>
            <button
              onClick={() => onDelete(project.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/30 text-red-300 hover:bg-red-500/20 text-xs font-semibold transition-colors"
            >
              <Trash2 className="w-3 h-3" /> Delete
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Modal = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
    <div
      className="absolute inset-0 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    />
    <div
      className="relative z-10 w-full max-w-2xl flex flex-col"
      style={{ maxHeight: "calc(100vh - 24px)" }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-30 pointer-events-none" />
      <div className="relative bg-[#0a0a1a] border border-white/20 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        {/* Fixed header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
          <h2 className="text-base font-bold text-white tracking-tight">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-gray-300 hover:text-white transition-colors rounded-lg bg-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  </div>
);

const ProjectForm = ({
  initial = {},
  onSubmit,
  onCancel,
  submitLabel,
  uploading,
}) => {
  const [form, setForm] = useState({
    Title: initial.Title || "",
    Description: initial.Description || "",
    TechStack: (initial.TechStack || []).join(", "),
    Features: (initial.Features || []).join(", "),
    Link: initial.Link || "",
    Github: initial.Github || "",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(initial.Img || null);

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (f) {
      setFile(f);
      setPreview(URL.createObjectURL(f));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form, file);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
      <InputField
        label="Project Title"
        value={form.Title}
        onChange={(e) => setForm({ ...form, Title: e.target.value })}
        placeholder="e.g. E-Commerce Platform"
        required
      />

      <div className="space-y-1.5">
        <label className="text-xs text-indigo-200 uppercase tracking-wider font-semibold">
          Description
        </label>
        <textarea
          rows={3}
          value={form.Description}
          onChange={(e) => setForm({ ...form, Description: e.target.value })}
          placeholder="Brief description of the project..."
          className="w-full bg-[#0d0d22] border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-gray-400 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all resize-none font-normal"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Tech Stack (comma-separated)"
          value={form.TechStack}
          onChange={(e) => setForm({ ...form, TechStack: e.target.value })}
          placeholder="React, Tailwind, Node.js"
        />
        <InputField
          label="Key Features (comma-separated)"
          value={form.Features}
          onChange={(e) => setForm({ ...form, Features: e.target.value })}
          placeholder="Auth, Real-time chat, Payments"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Live Demo URL"
          value={form.Link}
          onChange={(e) => setForm({ ...form, Link: e.target.value })}
          placeholder="https://..."
        />
        <InputField
          label="GitHub URL"
          value={form.Github}
          onChange={(e) => setForm({ ...form, Github: e.target.value })}
          placeholder="https://github.com/..."
        />
      </div>

      {/* Image upload */}
      <div className="space-y-1.5">
        <label className="text-xs text-indigo-200 uppercase tracking-wider font-semibold">
          Project Image
        </label>
        <div className="relative">
          <label className="flex items-center gap-4 p-3 rounded-xl border border-dashed border-white/20 hover:border-indigo-400/60 bg-white/5 hover:bg-white/8 cursor-pointer transition-all">
            {preview ? (
              <img
                src={preview}
                className="h-16 w-24 object-cover rounded-lg border border-white/20"
                alt="preview"
              />
            ) : (
              <div className="w-24 h-16 rounded-lg bg-white/5 flex items-center justify-center border border-white/15">
                <ImageIcon className="w-5 h-5 text-indigo-300" />
              </div>
            )}
            <div>
              <p className="text-sm text-gray-200 font-medium">
                {preview ? "Change image" : "Click to upload image"}
              </p>
              <p className="text-xs text-gray-300 mt-0.5">
                PNG, JPG, WEBP supported
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-xl border border-white/20 text-gray-200 hover:text-white text-sm transition-colors font-medium"
        >
          Cancel
        </button>
        <button type="submit" disabled={uploading} className="relative group/s">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-70 blur group-hover/s:opacity-100 transition duration-300" />
          <div className="relative flex items-center gap-2 px-5 py-2 bg-[#030014] rounded-xl border border-white/15">
            {uploading ? (
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <Upload className="w-4 h-4 text-indigo-400" />
            )}
            <span className="text-sm text-white font-semibold">
              {uploading ? "Saving..." : submitLabel}
            </span>
          </div>
        </button>
      </div>
    </form>
  );
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [editProject, setEditProject] = useState(null);
  const [uploading, setUploading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    setProjects(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const uploadImage = async (f) => {
    const fileName = `${Date.now()}-${f.name}`;
    await supabase.storage.from("project-images").upload(fileName, f);
    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleCreate = async (form, file) => {
    setUploading(true);
    let imgUrl = "";
    if (file) imgUrl = await uploadImage(file);
    await supabase.from("projects").insert({
      Title: form.Title,
      Description: form.Description,
      Img: imgUrl,
      TechStack: form.TechStack.split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      Features: form.Features.split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      Link: form.Link,
      Github: form.Github,
    });
    setShowCreate(false);
    setUploading(false);
    fetchProjects();
  };

  const handleEdit = async (form, file) => {
    setUploading(true);
    let imgUrl = editProject.Img || "";
    if (file) imgUrl = await uploadImage(file);
    await supabase
      .from("projects")
      .update({
        Title: form.Title,
        Description: form.Description,
        Img: imgUrl,
        TechStack: form.TechStack.split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        Features: form.Features.split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        Link: form.Link,
        Github: form.Github,
      })
      .eq("id", editProject.id);
    setEditProject(null);
    setUploading(false);
    fetchProjects();
  };

  const deleteProject = async (id) => {
    if (!confirm("Delete this project?")) return;
    await supabase.from("projects").delete().eq("id", id);
    fetchProjects();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-50" />
            <div className="relative w-9 h-9 bg-[#030014] rounded-xl border border-white/15 flex items-center justify-center">
              <FolderGit2 className="w-4 h-4 text-indigo-400" />
            </div>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Projects
            </h1>
            <p className="text-indigo-200 text-xs font-medium">
              {loading ? "Loading..." : `${projects.length} projects total`}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowCreate(true)}
          className="relative group shrink-0"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-60 blur group-hover:opacity-90 transition duration-300" />
          <div className="relative flex items-center gap-2 px-4 py-2.5 bg-[#030014] rounded-xl border border-white/15">
            <Plus className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-semibold text-white">New Project</span>
          </div>
        </button>
      </div>

      {/* Create Modal */}
      {showCreate && (
        <Modal title="Add New Project" onClose={() => setShowCreate(false)}>
          <ProjectForm
            onSubmit={handleCreate}
            onCancel={() => setShowCreate(false)}
            submitLabel="Save Project"
            uploading={uploading}
          />
        </Modal>
      )}

      {/* Edit Modal */}
      {editProject && (
        <Modal title="Edit Project" onClose={() => setEditProject(null)}>
          <ProjectForm
            initial={editProject}
            onSubmit={handleEdit}
            onCancel={() => setEditProject(null)}
            submitLabel="Update Project"
            uploading={uploading}
          />
        </Modal>
      )}

      {/* Projects Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <Card>
          <div className="p-16 text-center">
            <FolderGit2 className="w-10 h-10 text-indigo-300/40 mx-auto mb-3" />
            <p className="text-gray-200 text-sm font-medium">
              No projects yet. Create your first one!
            </p>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={deleteProject}
              onEdit={setEditProject}
            />
          ))}
        </div>
      )}
    </div>
  );
}
