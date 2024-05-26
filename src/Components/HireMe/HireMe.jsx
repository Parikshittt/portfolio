import React from 'react';
import { Tooltip } from "@mui/material";
import Header from "../../ReusableComponents/HeaderButtons/Header";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HireMe() {
    const navigate = useNavigate();
    function handleHireMeFormSubmisson(event) {
        event.preventDefault();

        const form = event.target;
        const formData = {
            from_name: form.from_name.value,
            company_name: form.company_name.value,
            emailID: form.emailID.value,
            phoneNo: form.phoneNo.value,
            details: form.details.value,
        };

        if (!formData.from_name || !formData.company_name || !formData.emailID || !formData.phoneNo) {
            toast.error('Please fill out all mandatory fields.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        emailjs.send('service_ygqbuvl', 'template_cfbjhna', formData, '9la9hclR96SeQCGdT')
            .then((result) => {
                form.reset();
                toast.success('Email sent successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    onClose: () => navigate('/')
                });
                Navigate.nai
            }, (error) => {
                toast.error('Failed to send email.', {
                    position: "top-right",
                    marginTop: 700,
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            });
    }
    return (
        <>
            <Header />
            <div style={{ display: "flex", justifyContent: "center", marginTop: 200, flexDirection: 'column', alignContent: 'center', alignItems: 'center', gap: 10 }}>
                <button
                    style={{
                        alignSelf: "flex-start",
                        border: 'none',
                        width: 120,
                        height: 50,
                        background: 'none',
                        border: 'none',
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        fontSize: 25,
                        marginLeft: '10%',
                        color: '#00000080'
                    }}
                    onClick={() => navigate('/')}
                    type="submit"
                >
                    Go Back
                </button>
                <form onSubmit={handleHireMeFormSubmisson} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: '80%', gap: 20 }}>
                    <div style={{ display: "flex", flexDirection: "row", width: '100%', justifyContent: "center", gap: 20 }}>
                        <input name="from_name" placeholder="Name" type="text" style={{
                            width: '50%', height: 50, borderRadius: 10, fontFamily: 'Poppins',
                            fontWeight: 'bold', paddingLeft: 10
                        }} />
                        <Tooltip title="Name of the company you are hiring for">
                            <input name="company_name" placeholder="Company Name" type="text" style={{
                                width: '50%', height: 50, borderRadius: 10, fontFamily: 'Poppins',
                                fontWeight: 'bold', paddingLeft: 10
                            }} />
                        </Tooltip>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", width: '100%', justifyContent: "center", gap: 20 }}>
                        <input name="emailID" placeholder="Email" type="email" style={{
                            width: '50%', height: 50, borderRadius: 10, fontFamily: 'Poppins',
                            fontWeight: 'bold', paddingLeft: 10
                        }} />
                        <input name="phoneNo" placeholder="Phone Number" type="number" style={{
                            width: '50%', height: 50, borderRadius: 10, fontFamily: 'Poppins',
                            fontWeight: 'bold', paddingLeft: 10
                        }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", width: '100%', justifyContent: "flex-start", gap: 20, alignContent: "flex-start" }}>
                        <textarea name="details" type="text" placeholder="Details (optional)" style={{
                            width: '100%',
                            height: 200,
                            textAlign: "left",
                            paddingTop: '10px',
                            paddingRight: '10px',
                            boxSizing: 'border-box',
                            resize: 'none',
                            fontFamily: 'Poppins',
                            fontWeight: 'bold',
                            borderRadius: 10, paddingLeft: 10
                        }} />
                    </div>
                    <button
                        style={{
                            alignSelf: "flex-start",
                            borderRadius: 10,
                            width: 120,
                            height: 50,
                            backgroundColor: '#0085ff',
                            border: 'none',
                            fontFamily: 'Poppins',
                            fontWeight: 'bold',
                            fontSize: 25
                        }}
                        type="submit"
                    >Send</button>
                </form >
                <ToastContainer
                    style={{ marginTop: 75 }}
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                    marginTop={700}
                />
            </div >
        </>
    )
}

export default HireMe;
