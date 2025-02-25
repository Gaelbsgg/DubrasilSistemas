document.getElementById('cep').addEventListener('blur', async function() {
    const cep = this.value.replace(/\D/g, '');
    if (cep.length === 8) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.ok) {
                const data = await response.json();
                if (!data.erro) {
                    document.getElementById('logradouro').value = data.logradouro || '';
                    document.getElementById('bairro').value = data.bairro || '';
                    document.getElementById('cidade').value = data.localidade || '';
                    document.getElementById('uf').value = data.uf || '';
                } else {
                    alert('CEP não encontrado.');
                }
            } else {
                alert('Erro ao buscar o CEP.');
            }
        } catch (error) {
            alert('Erro na conexão.');
        }
    } else {
        alert('CEP inválido.');
    }
});

document.getElementById('cnpj').addEventListener('blur', async function() {
    const cnpj = this.value.replace(/\D/g, '');
    if (cnpj.length === 14) {
        try {
            const response = await fetch(`https://publica.cnpj.ws/cnpj/${cnpj}`);
            if (response.ok) {
                const data = await response.json();
                document.getElementById('razao-social').value = data.razao_social || '';
                document.getElementById('nome-fantasia').value = data.nome_fantasia || '';
                document.getElementById('logradouro').value = data.endereco.logradouro || '';
                document.getElementById('numero').value = data.endereco.numero || '';
                document.getElementById('bairro').value = data.endereco.bairro || '';
                document.getElementById('cidade').value = data.endereco.municipio || '';
                document.getElementById('uf').value = data.endereco.uf || '';
                document.getElementById('cep').value = data.endereco.cep || '';
            } else {
                alert('Erro ao buscar informações do CNPJ.');
            }
        } catch (error) {
            alert('Erro na conexão ao buscar o CNPJ.');
        }
    } else {
        alert('CNPJ inválido.');
    }
});