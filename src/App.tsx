import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AddBlog,
  ManageBlogs,
  EnquiryList,
  AddGallery,
  ManageGallery,
  Login,
  ResetPage,
  ResetPasswordPage,
  AddHighlights,
  CreateAmenity,
  ManageAmenity,
  NewProject,
  OurProjects,
  AddTestimonial,
  ManageTestimonials,
  NotFound,
  Home,
} from "./pages/index";

import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />

        {/* Protected Routes */}
        <Route path="/" element={<Layout />}>
          {/* Home Page Route */}
          <Route index element={<Home />} />

          {/* Project Routes */}
          <Route path="project/our_projects" element={<OurProjects />} />
          <Route path="project/new_projects" element={<NewProject />} />
          <Route path="project/new_amenity" element={<CreateAmenity />} />
          <Route path="project/manage_amenity" element={<ManageAmenity />} />
          <Route
            path="project/amenity_highlights"
            element={<AddHighlights />}
          />

          {/* Contact Routes */}
          <Route path="contact/enquiry" element={<EnquiryList />} />

          {/* Gallery Routes */}
          <Route path="gallery/add_gallery" element={<AddGallery />} />
          <Route path="gallery/manage_gallery" element={<ManageGallery />} />

          {/* Testimonial Routes */}
          <Route
            path="testimonial/new_testimonial"
            element={<AddTestimonial />}
          />
          <Route
            path="testimonial/manage_testimonials"
            element={<ManageTestimonials />}
          />

          {/* Blogs Routes */}
          <Route path="blogs/add_blog" element={<AddBlog />} />
          <Route path="blogs/manage_blogs" element={<ManageBlogs />} />
        </Route>

        {/* Catch all Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
