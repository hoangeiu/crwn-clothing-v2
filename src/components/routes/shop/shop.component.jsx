import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import {
  fetchCategoriesAsync,
  fetchCategoriesStart,
  setCategories,
} from "../../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const getCategoriesMap = async () => {
    //   const categoriesArray = await getCategoriesAndDocuments();
    //   dispatch(setCategories(categoriesArray));
    // };
    // getCategoriesMap();
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
