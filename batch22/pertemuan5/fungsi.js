

// const messageManager = (function() {
//     const messages = [];
//     const API_URL = 'https://api.fonnte.com/send';
//     const API_TOKEN = 'DrYMr6sBfgLLmFGU2RHE';
    
//     const updateDisplay = () => {
//         const display = document.getElementById('tag1');
//         display.innerHTML = messages.length > 0 
//             ? messages.join('<br>')
//             : 'Belum ada pesan yang dikirim.';
//     };

//     const createFormData = (phone, message) => {
//         const formData = new FormData();
//         formData.append('target', phone.replace(/\D/g, ''));
//         formData.append('message', message);
//         formData.append('countryCode', '62');
//         return formData;
//     };

//     return {
//         async sendMessage(phone, message) {
//             if (!phone || !message) {
//                 alert('Nomor telepon dan pesan harus diisi!');
//                 return;
//             }

//             try {
//                 const response = await fetch(API_URL, {
//                     method: 'POST',
//                     headers: { 'Authorization': API_TOKEN },
//                     body: createFormData(phone, message)
//                 });

//                 const responseData = JSON.parse(await response.text());
//                 const status = responseData.status ? 'Success' : 'Failed';
//                 messages.push(`${status} -> No: ${phone}, Message: ${message}`);
                
//                 updateDisplay();
//             } catch (error) {
//                 messages.push(`Error -> No: ${phone}, Message: ${message}`);
//                 updateDisplay();
//             }
//         }
//     };
// })();
