import './style/AddBooks.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddBooks() {
  const [bookName, setBookName] = useState("");
  const [description, setDescription] = useState("");
  const [mrp, setMRP] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!bookName) newErrors.bookName = 'Book name is required.';
    if (!description) newErrors.description = 'Description is required.';
    if (!mrp) newErrors.mrp = 'MRP is required.';
    if (!url) newErrors.url = 'Image URL is required.';
    return newErrors;
  };

  const sendData = async (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please fill all fields correctly.', { position: "top-right" });
      return;
    }

    setLoading(true);
    setErrors({});

    const bookData = { bookName, description, mrp, url };
    
    try {
      const response = await fetch('http://localhost:5000/addBook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData)
      });

      const result = await response.json();

      if (response.status === 201) {
        toast.success('Book added successfully!', { position: "top-right" });
        setBookName("");
        setDescription("");
        setMRP("");
        setUrl("");
      } else {
        toast.error(result.message || 'Failed to add book!', { position: "top-right" });
      }
    } catch (error) {
      toast.error('An error occurred!', { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container min-vh-100">
      <ToastContainer />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Add Books</h1>
          <form onSubmit={sendData} noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Book Name</label>
              <input
                type="text"
                className={`form-control ${errors.bookName ? 'is-invalid' : ''}`}
                id="name"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
              />
              {errors.bookName && <div className="invalid-feedback">{errors.bookName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                id="description"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              {errors.description && <div className="invalid-feedback">{errors.description}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="mrp" className="form-label">MRP</label>
              <input
                type="number"
                className={`form-control ${errors.mrp ? 'is-invalid' : ''}`}
                id="mrp"
                value={mrp}
                onChange={(e) => setMRP(parseFloat(e.target.value))}
              />
              {errors.mrp && <div className="invalid-feedback">{errors.mrp}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="url" className="form-label">Image URL</label>
              <input
                type="url"
                className={`form-control ${errors.url ? 'is-invalid' : ''}`}
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              {errors.url && <div className="invalid-feedback">{errors.url}</div>}
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Adding...' : 'Add Book'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
