const client = require('./src/database');

async function testarConexao() {
  try {
    const conn = await client.conectar();
    const resultado = await conn.query('SELECT * FROM public.users');
    console.log('Conexão estabelecida com sucesso:', resultado);
  } catch (error) {
    console.error('Erro ao conectar:', error);
  }
}

testarConexao();