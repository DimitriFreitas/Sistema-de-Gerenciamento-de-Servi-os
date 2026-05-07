import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CrudDeactivatePage from "../components/CrudDeactivatePage";
import CrudFormPage from "../components/CrudFormPage";
import CrudListPage from "../components/CrudListPage";
import CrudModulePage from "../components/CrudModulePage";
import { moduleConfigs } from "../data/moduleConfigs";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="clientes" element={<CrudModulePage moduleConfig={moduleConfigs.clientes} />} />
          <Route path="clientes/listar" element={<CrudListPage moduleConfig={moduleConfigs.clientes} />} />
          <Route
            path="clientes/novo"
            element={<CrudFormPage mode="create" moduleConfig={moduleConfigs.clientes} />}
          />
          <Route
            path="clientes/editar"
            element={<CrudFormPage mode="edit" moduleConfig={moduleConfigs.clientes} />}
          />
          <Route
            path="clientes/inativar"
            element={<CrudDeactivatePage moduleConfig={moduleConfigs.clientes} />}
          />
          <Route path="produtos" element={<CrudModulePage moduleConfig={moduleConfigs.produtos} />} />
          <Route path="produtos/listar" element={<CrudListPage moduleConfig={moduleConfigs.produtos} />} />
          <Route
            path="produtos/novo"
            element={<CrudFormPage mode="create" moduleConfig={moduleConfigs.produtos} />}
          />
          <Route
            path="produtos/editar"
            element={<CrudFormPage mode="edit" moduleConfig={moduleConfigs.produtos} />}
          />
          <Route
            path="produtos/inativar"
            element={<CrudDeactivatePage moduleConfig={moduleConfigs.produtos} />}
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
