
const messageManager = (function(){
    const messages = [];
    const API_URL = 'https://api.fonnte.com/send';
    const API_TOKEN = '';

    const  updateDisplay  = () => {
        const display = document.getElementById('tag1');
        display.innerHTML = messages.length > 0 ? messages.join('<br>'):'Belom ada list pesan yang dikirim';
    };

    const createFormData  = ( message) => {
        const formData = new FormData();
        // formData.append('target', phone.replace(/\D/g, ''));
        formData.append('target', "120363404881661878@g.us");
        formData.append('message', message);
        formData.append('countryCode','62');
        console.log(`Ini Form Data ${formData}`);
        return formData;
    };

    return {
        async sendMessage(message) {
            if (!message) {
                alert('Nomor telepon dan pesan harus diisi!');
                return;
            }
            try {
                const response = await fetch(API_URL,{
                    method: 'POST',
                    headers: {'Authorization': API_TOKEN },
                    body: createFormData(message)
                });

                const responseData = JSON.parse(
                    await response.text()
                )
                const status = responseData.status ? "Succes":"Failed";
                messages.push(`Pesan ${status} untuk : ${message}`);
                updateDisplay();
            
            } catch (error) {
                messages.push(`Error -> No: , Message: ${message}`);
                updateDisplay();
            }
        }
    }

})();