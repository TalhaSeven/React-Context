# REACT CONTEXT

Bu proje, farklı bileşenleri bir araya getirerek bir React uygulaması oluşturur. Bu bileşenler arasında sayfa gezinmesi, kullanıcı oturum yönetimi ve API çağrıları gibi çeşitli işlevler yer alır. Aşağıda bileşenlerin açıklamaları yer almaktadır:

## About Bileşeni

**About**, "Hakkımızda" sayfasını temsil eden bir bileşendir. Bootstrap bileşenlerini kullanarak sayfa içeriğini oluşturur. Sayfa, "Online Courses", "Full-time Mentoring" ve "Learn Yourself" başlıkları altında üç farklı bölüme ayrılmıştır.

## Login Bileşeni

**Login**, kullanıcıların giriş yapabileceği bir sayfayı temsil eder. `useContext` hook'u ile `LoginContext` içeriğini tüketir ve kullanıcının e-posta ve şifre bilgilerini bu içerikten alır. Kullanıcı bilgilerini güncellemek için `setUser` fonksiyonu kullanılır. Sayfa yönlendirmeleri için `useNavigate` hook'u kullanılır.

## People Bileşeni

**People**, API üzerinden kullanıcı verilerini çekerek kullanıcıları listeler. `useState` hook'u ile kullanıcıları saklar ve `useEffect` hook'u ile bileşen yüklendiğinde bu verileri alır. Listelenen her kullanıcıya tıklanabilir bağlantılar eklenir. Bağlantılara tıklanınca `useNavigate` hook'u ile kişi detayına yönlendirme yapılır.

## PersonDetail Bileşeni

**PersonDetail**, kullanıcıların detaylarını gösteren bir sayfayı temsil eder. `useParams` hook'u ile URL parametrelerini alır ve belirli bir kullanıcının detaylarını API'den çeker. Bileşen hata durumlarını ve veri yüklenme durumunu ele alır. Kullanıcı detay sayfasında "Go Home" ve "Go Back" adlı butonlar ile sayfa yönlendirmeleri yapılabilir.

## PrivateRouter Bileşeni

**PrivateRouter**, kullanıcının oturum durumuna göre özel sayfaları koruma altına alan bir bileşendir. `useContext` hook'u ile `LoginContext` içeriğini tüketir ve kullanıcının giriş yapmış olup olmadığını kontrol eder. Eğer kullanıcı giriş yapmışsa içerik gösterilir, aksi takdirde kullanıcı giriş sayfasına yönlendirilir.

Bu bileşenler, bir araya gelerek sayfa yapısını, gezinmeyi, kullanıcı oturum yönetimini ve API verilerini görüntülemeyi sağlayan bir tek sayfa uygulamasını oluşturur.
