const buatElemen = (tag,isi) => {
    const elemen = document.createElement(tag)
    elemen.textContent = isi
    document.body.appendChild(elemen)
}

buatElemen('h1','ISI UNTUK H1')
buatElemen('h2','ISI UNTUK H2')
buatElemen('h3','ISI UNTUK H3')
buatElemen('h4','ISI UNTUK H4')
buatElemen('h5','ISI UNTUK H5')
buatElemen('h6','ISI UNTUK H6')
buatElemen('p','ISI UNTUK P')