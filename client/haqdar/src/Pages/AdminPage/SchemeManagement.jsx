import "./SchemeManagement.css";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import AdminNavbar from "../../Admin/AdminDashBoard/AdminNavbar.jsx";
import AdminFooter from "../../Admin/AdminDashBoard/AdminFooter.jsx";
import PageLoader from "../../Components/Common/PageLoader.jsx";
import SchemeHeader from "../../Admin/SchemeManagement/SchemeHeader.jsx";
import SchemeFilters from "../../Admin/SchemeManagement/SchemeFilters.jsx";
import SchemeTable from "../../Admin/SchemeManagement/SchemeTable.jsx";
import Pagination from "../../Admin/SchemeManagement/Pagination.jsx";
import ActivityBanner from "../../Admin/SchemeManagement/ActivityBanner.jsx";
import { useNavigate } from "react-router-dom";
import { getAllSchemes, deleteScheme } from "../../Services/scheme.service.js";
import ConfirmationModal from "../../Components/Common/ConfirmationModal.jsx";
export default function SchemeManagement() {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleEdit = (scheme) => {
    navigate("/add-scheme", {
      state: {
        mode: "edit",
        schemeId: scheme._id,
      },
    });
  };

  const handleView = (scheme) => {
    console.log("View:", scheme);
  };

  const [deleteModal, setDeleteModal] = useState({
    open: false,
    scheme: null,
  });

  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = (scheme) => {
    setDeleteModal({
      open: true,
      scheme,
    });
  };

  const confirmDelete = async () => {
    if (!deleteModal.scheme) return;
    try {
      setDeletingId(deleteModal.scheme._id);
      const res = await deleteScheme(deleteModal.scheme._id);
      toast.success(res.message || "Scheme deleted successfully.");
      setDeleteModal({
        open: false,
        scheme: null,
      });
      fetchSchemes();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete scheme.");
    } finally {
      setDeletingId(null);
    }
  };
  const cancelDelete = () => {
    if (deletingId) return;

    setDeleteModal({
      open: false,
      scheme: null,
    });
  };

  const fetchSchemes = async () => {
    try {
      setLoading(true);
      const res = await getAllSchemes();
      // Adjust this according to your API response
      setSchemes(res.schemes || res.data || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch schemes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchemes();
  }, []);

  if (loading) {
    return <PageLoader text="Loading Schemes" />;
  }

  return (
    <div className="scheme-page">
      <AdminNavbar />

      <div className="scheme-container">
        <SchemeHeader />

        <SchemeFilters />

        <SchemeTable
          schemes={schemes}
          loading={loading}
          fetchSchemes={fetchSchemes}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <Pagination />

        <ActivityBanner />
      </div>

      <AdminFooter />
      <ConfirmationModal
        open={deleteModal.open}
        type="danger"
        title="Delete Scheme"
        message={
          deleteModal.scheme
            ? `Are you sure you want to permanently delete "${deleteModal.scheme.name}"? This action cannot be undone.`
            : ""
        }
        confirmText="Delete"
        cancelText="Cancel"
        loading={deletingId === deleteModal.scheme?._id}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}
