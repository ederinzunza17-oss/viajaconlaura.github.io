<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Viaja con Laura | Agencia Juvenil de Viajes</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
  <style>
    * { margin:0; padding:0; box-sizing:border-box; font-family:'Poppins', sans-serif; }
    body { background: linear-gradient(to bottom, #ffe6f0, #ffffff, #e0f7ff); color:#333; }
    header { display:flex; justify-content:space-between; align-items:center; padding:15px 40px; background:white; position:fixed; width:100%; top:0; box-shadow:0 2px 10px rgba(0,0,0,0.1); z-index:1000; }
    header img { height:50px; }
    header h1 { color:#ff4da6; font-weight:800; }
    section { padding:100px 20px; text-align:center; }
    .hero { position:relative; height:90vh; display:flex; align-items:center; justify-content:center; color:white; }
    .hero video { position:absolute; width:100%; height:100%; object-fit:cover; }
    .hero-overlay { position:absolute; width:100%; height:100%; background:rgba(0,0,0,0.5); }
    .hero-content { position:relative; z-index:2; }
    .hero h2 { font-size:3rem; margin-bottom:20px; }
    .btn { background:#ff4da6; color:white; padding:15px 30px; border:none; border-radius:30px; font-weight:600; cursor:pointer; }
    .btn:hover { background:#ff1a8c; }
    .grid { display:grid; gap:30px; max-width:1100px; margin:auto; }
    .grid-3 { grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); }
    .card { background:white; padding:30px; border-radius:20px; box-shadow:0 10px 25px rgba(0,0,0,0.1); }
    .promo { background:linear-gradient(to right,#ff4da6,#00bfff); color:white; }
    .gallery img { width:100%; border-radius:15px; }
    footer { background:#111; color:white; padding:20px; }
    .whatsapp { position:fixed; bottom:20px; right:20px; background:#25D366; color:white; padding:15px 20px; border-radius:50px; text-decoration:none; font-weight:600; }
    form input, form textarea { width:100%; padding:15px; margin-bottom:15px; border-radius:10px; border:1px solid #ccc; }
  </style>
</head>
<body>

<a class="whatsapp" href="https://wa.me/526731389454" target="_blank">WhatsApp</a>

<header>
  <div style="display:flex; align-items:center; gap:15px;">
    <img src="logo.png" alt="Logo">
    <h1>Viaja con Laura</h1>
  </div>
</header>

<section class="hero">
  <video autoplay muted loop>
    <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-beach-1579/1080p.mp4" type="video/mp4">
  </video>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h2>Viaja, explora, vive 🌴✈️</h2>
    <button class="btn">Cotizar mi viaje</button>
  </div>
</section>

<section>
  <h2 style="color:#ff4da6; margin-bottom:40px;">Nuestra Comunidad Crece</h2>
  <div class="grid grid-3">
    <div class="card"><h3>+150</h3><p>Viajes Planeados</p></div>
    <div class="card"><h3>+120</h3><p>Clientes Felices</p></div>
    <div class="card"><h3>100%</h3><p>Atención Personalizada</p></div>
  </div>
</section>

<section class="promo">
  <h2>🔥 Promoción Especial</h2>
  <p>Reserva este mes y obtén descuento exclusivo en tu hotel.</p>
</section>

<section class="gallery">
  <h2 style="color:#ff4da6; margin-bottom:40px;">Galería</h2>
  <div class="grid grid-3">
    <img src="https://source.unsplash.com/400x400/?beach" />
    <img src="https://source.unsplash.com/400x400/?travel" />
    <img src="https://source.unsplash.com/400x400/?hotel" />
  </div>
</section>

<section>
  <h2 style="color:#ff4da6; margin-bottom:40px;">Envíanos un mensaje</h2>
  <form onsubmit="event.preventDefault(); alert('Mensaje enviado correctamente 🎉');">
    <input type="text" placeholder="Tu nombre" required>
    <textarea rows="4" placeholder="Cuéntanos a dónde quieres viajar..." required></textarea>
    <button class="btn">Enviar</button>
  </form>
</section>

<section style="background:#00bfff; color:white;">
  <p>📞 673 138 9454</p>
  <p>📧 dayan60@hotmail.com</p>
  <p>📍 Guamúchil, Sinaloa</p>
</section>

<footer>
  © 2026 Viaja con Laura | Agencia Juvenil de Viajes
</footer>

</body>
</html>
