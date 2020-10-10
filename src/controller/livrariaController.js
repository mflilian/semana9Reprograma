const livros = require("../model/livros.json");
const funcionarios = require("../model/funcionarios.json");

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(livros);
};

const getByIdLivros = (req, res) => {
    const id = req.params.id;

    res.status(200).send(livros.find((livro) => livro.id == id));
    
};

const getByIdGeneroLivros = (req, res) => {
    const genero = req.params.id;

    res.status(200).send(livros.find((livro) => livro.id == genero));
    
};

const getByIdFuncionarios = (req, res) => {
    const id = req.params.id;

    res.status(200).send(funcionarios.find((funcionario) => funcionario.id == id));
};

const postLivro = (req, res) => {
    console.log(req.body);
    const { id, titulo, autor, genero, editora, anoPublicacao} = req.body;
    livros.push({ id, titulo, autor, genero, editora, anoPublicacao });

    fs.writeFile("./src/model/livros.json", JSON.stringify(livros), 'utf8', function(err) {
        if (err) {
            return res.status(424).send({ message: err});
        }
        console.log("Livro consta no estoque!")
    });

    res.status(201).send(funcionarios);
};

const postFuncionario = (req, res) => {
    console.log(req.body);
    const { id, nome, anoContrato, cargo, idade } = req.body;
    funcionarios.push({ id, nome, anoContrato, cargo, idade });

    fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios), 'utf8', function(err) {
        if (err) {
            return res.status(424).send({ message: err});
        }
        console.log("Funcionário atualizado!");
    });

    res.status(201).send(funcionarios);
};

const deleteLivro = (req, res) => {
    const id = req.params.id;
    const livroEncontrado = livros.find((livro) => livro.id == id);
    const index = livros.indexOf(livroEncontrado)

    livros.splice(index, 1);

    fs.writeFile("./src/model/livros.json", JSON.stringify(livros), 'utf8', function(err) {
        if(err) {
            return res.status(424).send({ message: err });
        }
        console.log("Livro atualizado no estoque!")
    });

    res.status(200).send(livros);
};

const deleteFuncionario = (req, res) => {
    const id = req.params.id;
    const funcionarioEncontrado = funcionarios.find((funcionario) => funcionario.id == id);
    const index = funcionarios.indexOf(funcionarioEncontrado)

    funcionarios.splice(index, 1);

    fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios), 'utf8', function(err) {
        if(err) {
            return res.status(424).send({ message: err });
        }
        console.log("Funcionario atualizado!")
    });

    res.status(200).send(funcionarios);
};

module.exports = {
    getAll,
    getByIdLivros,
    getByIdGeneroLivros,
    getByIdFuncionarios,
    postLivro,
    postFuncionario,
    deleteLivro,
    deleteFuncionario
};