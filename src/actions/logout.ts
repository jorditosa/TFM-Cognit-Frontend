export async function logout() {
    document.cookie = "COGNIT_USER=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";

     // Redirigir a la base URL
     window.location.href = window.location.origin;
}