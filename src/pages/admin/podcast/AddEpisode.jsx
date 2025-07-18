import React, { useState } from "react";
import Popup from "@/common/Popup";
import toast from "react-hot-toast";
import Listing from "@/pages/api/Listing";

export default function AddEpisode({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    Cast: "",
    thumbnail: null,
    video: null,
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
    } else if (name === "video" && files?.[0]) {
      const file = files[0];
      if (!file.type.startsWith("video/")) {
        toast.error("Only video files allowed");
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
    if (loading) return;
    setLoading(true);
    try {
      const main = new Listing();
      const castArray = formData.Cast
        ? formData.Cast.split(",").map((c) => c.trim())
        : [];
      const payload = new FormData();
      payload.append("title", formData.title);
      payload.append("description", formData.description);
      if (formData.Cast) payload.append("Cast", JSON.stringify(castArray));
      if (formData.thumbnail) payload.append("thumbnail", formData.thumbnail);
      if (formData.video) payload.append("video", formData.video);

      const response = await main.PodcastAdd(payload);

      if (response?.data?.status) {
        toast.success(response.data.message);
        setFormData({
          title: "",
          description: "",
          Cast: "",
          thumbnail: null,
          video: null,
        });
        setThumbnailPreview(null);
        onClose();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("API error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose} size="max-w-lg">
      <form onSubmit={handleSubmit} className="space-y-4 text-white rounded-md">
        <h3 className="text-2xl font-bold text-white mb-4 text-center w-full">
          Add Podcast
        </h3>

        {/* Title */}
        <div>
          <label className="block mb-1 text-sm font-medium text-white">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            className="w-full p-2 rounded bg-[#1c1c1c] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-sm font-medium text-white">
            Description
          </label>
          <textarea
            name="description"
            rows="3"
            className="w-full p-2 rounded bg-[#1c1c1c] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Cast */}
        <div>
          <label className="block mb-1 text-sm font-medium text-white">
            Cast <span className="text-xs text-white">(Comma-separated)</span>
          </label>
          <input
            type="text"
            name="Cast"
            className="w-full p-2 rounded bg-[#1c1c1c] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            value={formData.Cast}
            onChange={handleChange}
          />
        </div>

        {/* Thumbnail Uploader */}
        <div>
          <label className="block mb-1 text-sm font-medium text-white">
            Thumbnail <span className="text-red-500">*</span>
          </label>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="w-64 h-64 bg-[#1c1c1c] border border-dashed border-gray-500 rounded flex items-center justify-center text-gray-400 cursor-pointer hover:border-white relative"
          >
            {thumbnailPreview ? (
              <img
                src={thumbnailPreview}
                alt="Preview"
                className="h-full object-contain rounded"
              />
            ) : (
              <p>Drag & drop image or click to select</p>
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

        {/* Video Uploader */}
        <div>
          <label className="block mb-1 text-sm font-medium text-white">
            Video <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleChange}
            className="w-full text-sm text-gray-400 file:bg-white file:text-black file:rounded file:px-4 file:py-1"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-semibold py-2 rounded-md transition cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </Popup>
  );
}
