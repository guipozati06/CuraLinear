/**
 * Função para inserir um novo usuário no localStorage (simulando um INSERT).
 * Esta função é chamada pelo botão "Cadastrar" no seu HTML.
 */
function inserirDS() {
    // 1. Pega os dados atuais. Se não houver, inicializa um array vazio.
    let ds = JSON.parse(localStorage.getItem("dados")) || [];
    
    // 2. Captura e limpa os valores dos campos do HTML
    let nm = document.querySelector("#nome").value.trim();
    let ma = document.querySelector("#email").value.trim();
    let ps = document.querySelector("#senha").value;

    // 3. Validação básica
    if (nm === "" || ma === "" || ps === "") {
        alert("🚨 Por favor, preencha todos os campos obrigatórios (Nome, E-mail, Senha).");
        return; 
    }

    // 4. Geração de ID único e sequencial
    // Encontra o maior ID existente e soma 1. Se o array estiver vazio, começa com 1.
    const novoId = ds.length > 0 ? Math.max(...ds.map(d => d.id)) + 1 : 1;
    
    // 5. Geração de Login (Criado a partir do primeiro nome + o novo ID)
    let primeiroNome = nm.toLowerCase().split(' ')[0];
    let lg = primeiroNome + novoId; 

    // 6. Cria o novo objeto de dado
    let dado = { 
        id: novoId, 
        login: lg,
        senha: ps, 
        nome: nm, 
        email: ma 
    };
    
    // 7. Adiciona o novo dado e salva de volta no localStorage
    ds.push(dado);
    let json = JSON.stringify(ds);
    localStorage.setItem("dados", json);
    
    // 8. Feedback e Limpeza
    alert(`🎉 Cadastro realizado com sucesso! Seu login gerado é: ${lg}`);
    limparCampos(); // Chama a função que limpa os campos
}

// Certifique-se de que a função dados() seja chamada pelo menos uma vez 
// para inicializar o localStorage com os usuários de exemplo.
// dados();