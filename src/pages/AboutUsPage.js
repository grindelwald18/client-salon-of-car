import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../css/index.css";
import ключи from '../img/ключи.jpg'; // Импортируйте изображение

export default function BrandsPage() {
return (
<>
<Header />
<div className="containerAbout">
<h1 style={{ textAlign: 'center', margin: '40px' }}>О нас</h1>
<div className="about-section">
<div className='infoAboutUs'>
<h2>О нашей платформе</h2>
<p>
Мы предоставляем автоматизированную платформу для продажи дилерских автомобилей. Наша цель - упростить и ускорить процесс покупки и продажи автомобилей, предоставляя удобные инструменты и ресурсы для дилеров и покупателей.
</p>
<p>
Наша платформа предлагает широкий выбор автомобилей, а также возможность создания собственного автопарка. Мы стремимся обеспечить нашим клиентам удобство и надежность при покупке и продаже автомобилей.
</p>
<p>
Наша команда экспертов всегда готова помочь вам в любых вопросах, связанных с использованием нашей платформы. Мы стремимся предоставить высококачественный сервис и поддержку для наших клиентов.
</p>
<p>
Адрес: г. Минск, ул. Интернациональная, д. 123<br/>
Телефон: +7 123 456 7890<br/>
Email: AVcar@gmail.com
</p>
</div>
<div className='imgAboutUs'>
<img src={ключи} alt="Ключи" /> {/* Используйте импортированное изображение */}
</div>
</div>
</div>
<Footer />
</>
);
}