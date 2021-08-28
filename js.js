const mask = {
    cpf (value) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },
    tel (value) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d)(\d)/, '($1$2)')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    }

}

document.querySelectorAll('input').forEach(($input) => {
    const campo = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = mask[campo](e.target.value)
    }, false)
})