# REACT CONTEXT

This project combines different components to create a React application. These components encompass functionalities such as page navigation, user session management, and API calls. Below are the descriptions of the components:

## About Component

**About** represents the "About Us" page. It utilizes Bootstrap components to create the page content. The page is divided into three different sections: "Online Courses," "Full-time Mentoring," and "Learn Yourself."

## Login Component

**Login** represents a page where users can log in. It uses the `useContext` hook to consume the `LoginContext` context and fetches the user's email and password information from this context. The `setUser` function is used to update user information. Page navigation is achieved using the `useNavigate` hook.

## People Component

**People** lists user data by fetching it from an API. It utilizes the `useState` hook to store user data and the `useEffect` hook to fetch this data when the component is first loaded. Clickable links are added for each listed user. Clicking these links triggers navigation to the individual's detail page using the `useNavigate` hook.

## PersonDetail Component

**PersonDetail** represents a page that displays detailed information about users. The `useParams` hook is used to retrieve URL parameters and fetch data for a specific user from an API. The component handles error scenarios and data loading status. "Go Home" and "Go Back" buttons on the user detail page enable page navigation.

## PrivateRouter Component

**PrivateRouter** secures private pages based on the user's session status. It consumes the `LoginContext` context using the `useContext` hook and checks whether the user has logged in. If the user is logged in, the content is displayed using `<Outlet />`; otherwise, the user is redirected to the login page using the `useNavigate` hook.

These components come together to create a single-page application that manages page structure, navigation, user session management, and the display of API data.


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
