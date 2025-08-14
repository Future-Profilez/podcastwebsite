import Popup from "@/common/Popup";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AddGuide({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    file: "",
    thumbnail: null,
    language: "",
  });
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "thumbnail" && files?.[0]) {
      const file = files[0];
      if (!file.type.startsWith("image/")) {
        toast.error("Only image files allowed");
        return;
      }
      setFormData((prev) => ({ ...prev, thumbnail: file }));
      setThumbnailPreview(URL.createObjectURL(file));
    } else if (name === "file" && files?.[0]) {
      const file = files[0];
      if (!file.type.startsWith("application/pdf")) {
        toast.error("Only video or audio files allowed");
        return;
      }
      setFormData((prev) => ({ ...prev, video: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, thumbnail: file }));
      setThumbnailPreview(URL.createObjectURL(file));
    } else {
      toast.error("Only image files are allowed");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  console.log("formdata", formData);

  return (
    <Popup isOpen={isOpen} onClose={onClose} size="max-w-lg">
      <form onSubmit={handleSubmit} className=" w-full text-white">
        <h3 className="text-3xl font-bold text-center heading">Add Guide</h3>
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* Author */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">
              Author<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="author"
              className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              value={formData.author}
              onChange={handleChange}
            />
          </div>

          {/* Language */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">
              Language{" "}
              <span className="text-xs text-gray-400">(Comma-separated)</span>
            </label>
            <input
              type="text"
              name="language"
              className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              value={formData.language}
              onChange={handleChange}
            />
          </div>

          {/* Thumbnail Uploader */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Thumbnail <span className="text-red-500">*</span>
            </label>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="relative w-full h-64 bg-[#1c1c1c] border-2 border-dashed border-gray-600 rounded-xl flex items-center justify-center text-gray-400 cursor-pointer hover:border-white transition"
            >
              {thumbnailPreview ? (
                <img
                  src={thumbnailPreview}
                  alt="Preview"
                  className="h-full object-contain rounded"
                />
              ) : (
                <p className="text-center text-sm">
                  Drag & drop or click to upload
                </p>
              )}
              <input
                type="file"
                name="thumbnail"
                accept="image/*"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              name="description"
              className="w-full p-3 rounded-lg bg-[#1c1c1c] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* File */}
          <div className="space-y-1">
            <label className="block text-sm font-medium">
              File <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="file"
              accept="application/pdf"
              onChange={handleChange}
              className="w-full text-sm text-gray-400 file:bg-white file:text-black file:rounded-lg file:px-4 file:py-2 border border-gray-700 bg-[#1c1c1c]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full button-bg font-semibold py-3 rounded-lg transition cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </Popup>
  );
}
