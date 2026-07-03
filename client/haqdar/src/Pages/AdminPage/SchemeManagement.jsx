import "./SchemeManagement.css";
import { useEffect, useState, useMemo } from "react";
import { toast } from "sonner";

import AdminNavbar from "../../Admin/AdminDashBoard/AdminNavbar.jsx";
import AdminFooter from "../../Components/Footer/Footer.jsx"
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
  const [filters, setFilters] = useState({
    search: "",
    category: "All Categories",
    status: "All Statuses",
  });

  const filteredSchemes = useMemo(() => {
    let filtered = [...schemes];
    // Search
    if (filters.search.trim()) {
      const keyword = filters.search.toLowerCase();
      filtered = filtered.filter(
        (scheme) =>
          scheme.name?.toLowerCase().includes(keyword) ||
          String(scheme.no).includes(keyword) ||
          scheme.category?.toLowerCase().includes(keyword),
      );
    }
    // Category
    if (filters.category !== "All Categories") {
      filtered = filtered.filter(
        (scheme) => scheme.category === filters.category,
      );
    }

    // Status
    if (filters.status !== "All Statuses") {
      filtered = filtered.filter((scheme) => scheme.status === filters.status);
    }

    return filtered;
  }, [schemes, filters]);

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalItems = filteredSchemes.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const paginatedSchemes = filteredSchemes.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

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
      const data = res.schemes || res.data || [];
      setSchemes(data);
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

      <main className="scheme-main">
        <div className="scheme-container">
          <SchemeHeader />

          <SchemeFilters
            schemes={schemes}
            filters={filters}
            setFilters={setFilters}
          />

          <SchemeTable
            schemes={paginatedSchemes}
            loading={loading}
            fetchSchemes={fetchSchemes}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
          />

          <ActivityBanner />
        </div>
      </main>

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
