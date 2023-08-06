// script.js
document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");
    const dynamicContent = document.getElementById("dynamic-content");
  
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("active");
    });
  
    // Function to load content based on the selected link
    function loadContent(content) {
      dynamicContent.innerHTML = content;
      // Store the selected content in localStorage
      localStorage.setItem("selectedContent", content);
    }
  
    // Check if any content is stored in localStorage
    const storedContent = localStorage.getItem("selectedContent");
  
    if (storedContent) {
      // If there's stored content, load it as the default page
      dynamicContent.innerHTML = storedContent;
    } else {
      // If there's no stored content, set the default content (Home page) here
      loadContent(`
      <div class="container-fluid">
      <header>
      <h1>
      <p class="text-center">
      Privacy Policy
      </p>
      </h1>
      </header>
      <main>
      <h5>
      <p class="pt-2 m-2">Di Fatimatuzzahro, kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi data yang diperoleh melalui penggunaan aplikasi kami, yang dirancang untuk membantu dokter mendiagnosa pneumonia. Dengan menggunakan aplikasi kami, Anda setuju dengan praktik yang dijelaskan dalam Kebijakan Privasi ini.
      </p>
      </h5>
      </main>
      </div>
      `);
    }
  
    // Get all the navigation links in the sidebar
    const navLinks = document.querySelectorAll(".nav-link");
  
    // Add event listeners to the navigation links
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        // Remove active class from all links
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        // Add active class to the clicked link
        link.classList.add("active");
  
        const linkContent = event.target.textContent.trim();
        // You can update the dynamic content based on the link clicked
        switch (linkContent) {
          case "Home":
            loadContent(`
            <div class="container-fluid">
            <header>
            <h1>
            <p class="text-center">
            Privacy Policy
            </p>
            </h1>
            </header>
            <main>
            <h5>
            <p class="pt-2 m-2">Di Fatimatuzzahro, kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi data yang diperoleh melalui penggunaan aplikasi kami, yang dirancang untuk membantu dokter mendiagnosa pneumonia. Dengan menggunakan aplikasi kami, Anda setuju dengan praktik yang dijelaskan dalam Kebijakan Privasi ini.
            </p>
            </h5>
            </main>
            </div>
            `);
            break;
          case "Pengumpulan dan Penggunaan Informasi":
            loadContent(`
            <div class="container-fluid">
            <header>
            <h1>
            <p class="text-center">
            Privacy Policy
            </p>
            </h1>
            </header>
            <main>
            <h3>
            <p class="text-center">
            Informasi Pribadi
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">Kami dapat mengumpulkan informasi pribadi seperti nama Anda, alamat email, usia, dan detail relevan lainnya ketika Anda mendaftar atau membuat akun di aplikasi kami. Informasi ini digunakan untuk mempersonalisasi pengalaman Anda, menghubungi Anda, dan meningkatkan layanan kami.
            </p>
            </h5>
            <h3 class="pt-3">
            <p class="text-center">
            Informasi Kesehatan
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">Untuk memberikan bantuan diagnosis pneumonia yang akurat, aplikasi kami dapat mengumpulkan data terkait kesehatan, termasuk gejala, riwayat medis, dan informasi kesehatan lainnya. Informasi ini hanya digunakan untuk tujuan membantu mendiagnosa pneumonia dan tidak dibagikan kepada pihak ketiga
            </p>
            </h5>
            </main>
            </div>
            `
            );
            break;
          case "Keamanan Data":
            loadContent(`
            <div class="container-fluid">
            <header>
            <h1>
            <p class="text-center">
            Privacy Policy
            </p>
            </h1>
            </header>
            <main>
            <h3>
            <p class="text-center">
            Keamanan Data
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">
            Kami menerapkan tindakan keamanan yang ketat untuk melindungi informasi pribadi dan kesehatan Anda dari akses, perubahan, pengungkapan, atau penghancuran yang tidak sah. Penyimpanan dan transmisi data kami enkripsi untuk menjaga kerahasiaan dan integritas informasi Anda.
            </p>
            </h5>
            <h3 class="pt-3">
            <p class="text-center">
            Personil
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">Hanya personil yang berwenang yang memiliki akses ke data pribadi dan kesehatan Anda, dan mereka terikat oleh kewajiban kerahasiaan yang ketat.
            </p>
            </h5>
            </main>
            </div>
            `);
            break;
          case "Penggunaan Aplikasi":
            loadContent(`
            <div class="container-fluid">
            <header>
            <h1>
            <p class="text-center">
            Privacy Policy
            </p>
            </h1>
            </header>
            <main>
            <h3>
            <p class="text-center">
            Diagnosis Pneumonia
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">
            Tujuan utama pengumpulan informasi kesehatan adalah untuk membantu profesional kesehatan dalam mendiagnosa pneumonia secara akurat. Aplikasi kami memproses data yang diberikan oleh pengguna untuk memberikan wawasan yang relevan kepada dokter.
            </p>
            </h5>
            <h3 class="pt-3">
            <p class="text-center">
            Analisis Internal
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">Kami dapat menggunakan data yang diagregasi dan anonim untuk analisis internal dan tujuan penelitian, guna meningkatkan kinerja dan akurasi aplikasi kami.
            </p>
            </h5>
            </main>
            </div>
            `);
            break;
            case "Berbagi Informasi":
            loadContent(`
            <div class="container-fluid">
            <header>
            <h1>
            <p class="text-center">
            Privacy Policy
            </p>
            </h1>
            </header>
            <main>
            <h3>
            <p class="text-center">
            Layanan Pihak Ketiga
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">
            Kami dapat melibatkan penyedia layanan pihak ketiga yang terpercaya untuk membantu kami menyediakan layanan aplikasi kami. Penyedia ini diwajibkan untuk menjaga kerahasiaan dan keamanan informasi tersebut dan dilarang menggunakannya untuk tujuan lain.
            </p>
            </h5>
            <h3 class="pt-3">
            <p class="text-center">
            Kepatuhan Hukum
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">Kami dapat mengungkapkan informasi pribadi atau kesehatan jika diwajibkan oleh hukum, seperti dalam tanggapan terhadap perintah pengadilan, subpoena, atau proses hukum lainnya.
            </p>
            </h5>
            </main>
            </div>
            `);
            break;
            case "Persetujuan":
            loadContent(`
            <div class="container-fluid">
            <header>
            <h1>
            <p class="text-center">
            Privacy Policy
            </p>
            </h1>
            </header>
            <main>
            <h3>
            <p class="text-center">
            Persetujuan
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">
            Dengan menggunakan aplikasi kami, Anda memberikan persetujuan untuk pengumpulan, penggunaan, dan pemrosesan informasi pribadi dan kesehatan Anda seperti yang dijelaskan dalam Kebijakan Privasi ini.
            </p>
            </main>
            </div>
            `);
            break;
            case "Hak Pengguna":
            loadContent(`
            <div class="container-fluid">
            <header>
            <h1>
            <p class="text-center">
            Privacy Policy
            </p>
            </h1>
            </header>
            <main>
            <h3>
            <p class="text-center">
            Akses dan Modifikasi
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">
            Anda berhak mengakses dan mengubah informasi pribadi Anda melalui pengaturan akun Anda.
            </p>
            </h5>
            <h3 class="pt-3">
            <p class="text-center">
            Penghapusan Data
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">Anda dapat meminta penghapusan informasi pribadi dan kesehatan Anda. Namun, beberapa data mungkin tetap disimpan sesuai dengan persyaratan hukum atau untuk tujuan bisnis yang sah.
            </p>
            </h5>
            </main>
            </div>
            `);
            break;
            case "Perubahan Kebijakan Privasi":
            loadContent(`
            <div class="container-fluid">
            <header>
            <h1>
            <p class="text-center">
            Privacy Policy
            </p>
            </h1>
            </header>
            <main>
            <h3>
            <p class="text-center">
            Perubahan Kebijakan Privasi
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">
            Kami berhak untuk mengubah atau memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan di posting pada halaman ini, dan Anda akan diberitahu melalui aplikasi.
            </p>
            </main>
            </div>
            `);
            break;
            case "Hubungi Kami":
            loadContent(`
            <div class="container-fluid">
            <header>
            <h1>
            <p class="text-center">
            Privacy Policy
            </p>
            </h1>
            </header>
            <main>
            <h3>
            <p class="text-center">
            Hubungi Kami
            </p>
            </h3>
            <h5>
            <p class="pt-2 m-2">
            Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini atau pengelolaan data Anda, silakan hubungi kami di zahro248120@gmail.com.
            </p>
            <p class="pt-2 m-2">
            Harap tinjau Kebijakan Privasi ini secara berkala dan pastikan Anda setuju dengan ketentuannya sebelum menggunakan aplikasi kami. Dengan terus menggunakan aplikasi kami, Anda mengakui bahwa Anda telah membaca, memahami, dan menyetujui Kebijakan Privasi ini.            
            </p>
            </main>
            </div>
            `);
            break;
          default:
            loadContent("<p>Content not found.</p>");
        }
  
        // Close the sidebar after clicking a link (on small screens)
        if (window.innerWidth < 768) {
          sidebar.classList.remove("active");
        }
      });
    });
  });
  