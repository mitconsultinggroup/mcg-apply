// import React from "react";

// export default function DelibStatusForm() {
//     const [pnmData, setPNMData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         fetch("/api/admin/view-all-candidates").then((response) => {
//             if (response.ok) {
//                 response.json().then((data) => {
//                     setPNMData(data.candidates);
//                     setIsLoading(false);
//                 });
//             } else {
//                 navigate("/login");
//             }
//         });
//     }, []);

//     const navigate = useNavigate();
//     const closeProfile = () => {setProfileOpen(false)};


//     return (
//         isLoading ? <div>Loading Status...</div> :
//             <div>
               
//             </div>
//     );
// }
