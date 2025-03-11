import React, { useState } from "react";

function ProfilePage() {
  const [profileImage, setProfileImage] = useState("/api/placeholder/150/150");
  const [userData, setUserData] = useState({
    nombre: "Usuario Ejemplo",
    email: "usuario@ejemplo.com",
    ubicacion: "Ciudad, País",
    bio: "Esta es una breve biografía sobre ti. Puedes editar esta información haciendo clic en el botón de editar.",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData);

  // Manejar la subida de imagen
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Guardar cambios en el perfil
  const handleSaveChanges = () => {
    setUserData(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">Mi Perfil</h1>
        </div>

        {/* Content */}
        <div className="p-6 md:flex">
          {/* Sidebar with profile image */}
          <div className="md:w-1/3 md:pr-8 mb-6 md:mb-0 flex flex-col items-center">
            <div className="avatar">
              <div className="w-40 h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                <img src={profileImage} alt="Foto de perfil" />
              </div>
            </div>

            <div className="mt-4">
              <label className="btn btn-sm btn-outline btn-primary">
                Cambiar foto
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>

          {/* Profile details */}
          <div className="md:w-2/3">
            {isEditing ? (
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Nombre</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Ubicación</span>
                  </label>
                  <input
                    type="text"
                    name="ubicacion"
                    value={formData.ubicacion}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Biografía</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="flex space-x-3 mt-6">
                  <button
                    className="btn btn-primary"
                    onClick={handleSaveChanges}
                  >
                    Guardar cambios
                  </button>
                  <button
                    className="btn btn-ghost"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {userData.nombre}
                </h2>
                <p className="text-gray-600 mb-1">{userData.email}</p>
                <p className="text-gray-600 mb-4">{userData.ubicacion}</p>

                <div className="divider"></div>

                <h3 className="text-lg font-semibold mb-2">Biografía</h3>
                <p className="text-gray-700 mb-6">{userData.bio}</p>

                <button
                  className="btn btn-primary"
                  onClick={() => setIsEditing(true)}
                >
                  Editar perfil
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Options */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Opciones de perfil</h3>
          <div className="menu bg-base-100 rounded-lg">
            <li>
              <button className="flex items-center py-3 hover:bg-gray-100 w-full text-left px-4 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Cambiar contraseña
              </button>
            </li>
            <li>
              <button className="flex items-center py-3 hover:bg-gray-100 w-full text-left px-4 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                Configuración de privacidad
              </button>
            </li>
            <li>
              <button className="flex items-center py-3 hover:bg-gray-100 w-full text-left px-4 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
                Notificaciones
              </button>
            </li>
            <li>
              <button className="flex items-center py-3 hover:bg-red-50 w-full text-left px-4 text-red-500 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                Cerrar sesión
              </button>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
