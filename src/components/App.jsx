import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import HomePage from "../pages/HomePage";
import Layout from "./Layout/Layout";
import GlobalStyles from "./PageParts/GlobalStyles";
// import Cast from "./PageParts/Cast";
// import Reviews from "./PageParts/Reviews";
// import MovieDetails from "./pages/MovieDetails";
// import Movies from "./pages/Movies";

const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))
const Movies = lazy(()=>import('../pages/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'))
const Cast = lazy(() => import('./PageParts/Cast'))
const Reviews = lazy(() => import('./PageParts/Reviews'))


export const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
