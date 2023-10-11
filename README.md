
# Descrição

A car_store API oferece uma plataforma que conecta vendedores e compradores de carros, os anunciantes tem a possibilidade de criar anúncios de carros e os compradores podem explorar uma ampla variedade de opções. 

# Funcionamento

- Cadastro de Usuário e Endereço

- Autenticação e Login: 

- Criação de Anúncios 

- Busca avançada com filtragem de Anúncios

- Anúncios detalhados e específicos.

- Criação, edição e exclusão de Comentários

- Gestão de Conta

- Edição e Exclusão de Anúncios

- Acesso aos Anúncios de um Anunciante

# Libs e Techs

- Typescript;
- NodeJs;
- Express;
- TypeORM;
- Zod;
- Pg;
- Dotenv;
- BcryptJs;
- Jsonwebtoken;
- Express-async-errors;




## Rodando o projeto

- Clonar o repositório

```bash
  git clone https://github.com/ThalissonMaximino/Car_Store.git
```

- Crie um arquivo .env na raiz do projeto (utilize o .env.example para preencher corretamente os dados do seu .env);

- Crie um banco de dados postgres e configure o DATABASE_URL com as suas informações de database e de usuário postgres

- Instale as dependências

```bash
  npm install
```
- Rode as migrações na sua máquina para criar as tabelas do arquivo migrations no seu banco de dados

```bash
  npm run migrate
```

- Para iniciar o servidor

```bash
  npm run dev
```
## Endpoints /Developers

Method | Endpoint | Responsability
| --- | --- | --- | 
POST| /users |Criação de usuário|
PATCH| /users/update/:id | Atualiza as informações de um usuário|
DELETE| /users/delete/:id | Deleta um usuário|
PATCH| /address | Atualiza as informações de um endereço| 
POST| /login | Login e autenticação| 
GET| /salesAd | Lista com todos os anúncios|
GET| /salesAd/:id | Lista um anúncio por um Id específico|
GET| /salesAd/users/:userId | Lista os anúncios de um vendedor|
POST| /salesAd| Cria um anúncio|
POST| /salesAd/filter | Busca filtrada de anúncios|  
PATCH| /salesAd/:id | Atualiza as informações do anúncio|
DELETE| /salesAd/:id | Deleta um anúncio
POST| /comments/salesAd/:salesAdId |Criação de comentário|
PATCH| /comments/salesAd/:id | Edição de comentário|
DELETE| comments/salesAd/:id | Deleta um comentário|


# Requests e Responses

## /Users

### Criar um usuário

` POST /users - FORMATO DA REQUISIÇÃO `
 
```json
{
	"firstName": "Karina",
	"lastName": "Doaespa",
	"email": "karinaAespa@gmail.com",
	"password": "1234",
	"cpf": "-123456789",
	"cellphone": "012345678",
	"description": "olá sou a karina do aespa",
	"birthdate": "11/04/2000",
        "userImage": "Url de uma linda foto",
	"role": "seller",
	"address": {
		"cep": "63024640",
		"state": "CE",
		"city": "coreia",
		"street": "rua do aespa",
		"addressNumber": 123,
		"addressComplement": "casa"
	}
}
```
1. a role do usuário pode ser "seller" ou "buyer"
2. Email, CPF e cellphone são únicos

Caso dê tudo certo, a resposta será assim:

` POST /users - FORMATO DA RESPOSTA - STATUS 201 `

```json
{
	"firstName": "Karina",
	"lastName": "Doaespa",
	"email": "karinaAespa@gmail.com",
	"cpf": "-123456789",
	"cellphone": "012345678",
	"description": "olá sou a karina do aespa",
	"birthdate": "11/04/2000",
        "userImage": "Url de uma linda foto",
	"role": "seller",
    "created_at": "2138287248",
	"address": {
		"cep": "63024640",
		"state": "CE",
		"city": "coreia",
		"street": "rua do aespa",
		"addressNumber": 123,
		"addressComplement": "casa"
	}
}
```
### Editar dados do usuário
` PATCH /users/update/:id - FORMATO DA REQUISIÇÃO `

```json
{
	"firstName": "karina",
	"lastName": "doblackpink",
	"email": "karinablackpink@mail.com",
	"password": "123456",
}
```
1. todos os dados são opcionais nesse Request

`PATCH /users/update/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "b2fa0578-1fcf-4ebd-9346-105d8f75a81e",
	"firstName": "karina",
	"lastName": "doblackpink",
	"email": "karinablackpink@mail.com",
	"created_at": "1693336326329"
}
```
### Deleção de usuário

`DELETE /users/delete/:id - FORMATO DA REQUISIÇÃO`

Não é necessário nenhum corpo de request.

`DELETE /users/delete/:id - FORMATO DA RESPOSTA - STATUS 204`

Sem corpo de response.

## Address
### Editar dados do endereço
`PATCH /address - FORMATO DA REQUISIÇÃO`
```json
{
		"cep": "1203921039",
		"state": "SP",
		"city": "´china",
		"street": "rua da smtown",
		"addressNumber": 1224,
		"addressComplement": "apartamento"
}
```
`PATCH /address - FORMATO DA RESPOSTA - STATUS 200`
```json
{
		"id": "8b8f50b5-cd9d-42b1-ad2d-21d5c2d93066",
		"created_at": "1693415422288",
		"cep": "1203921039",
		"state": "SP",
		"city": "´china",
		"street": "rua da smtown",
		"addressNumber": 1224,
		"addressComplement": "apartamento"
}
```

## Login

`POST /login - FORMATO DA REQUISIÇÃO`
```json
{
  "email": "karinaAespa@gmail.com",
  "password": "1234"
}
```
`POST /login - FORMATO DA RESPOSTA - STATUS 201`
```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZ2VyQG1haWwuY29tIiwiaWF0IjoxNjkwMjUxMDcxLCJleHAiOjE2OTAzMzc0NzEsInN1YiI6Ijg4MmYxYWJlLTBmNGUtNGRhOC1hZDc5LTlhNmNmMmJmODdjMiJ9.1Z-TC0ohIf3Xm_6D7ykilk_FPRdznzxVpc-I0oGxOeA",
}
```

## salesAd

### Listar todos os anúncios

`GET /salesAd - FORMATO DA REQUISIÇÃO` 

Não é necessário nenhum corpo de request.

`POST /login - FORMATO DA RESPOSTA - STATUS 200`
```json
{
	"prevPage": null,
	"nextPage": null,
	"count": 1,
	"data": [
		{
			"id": "75e75015-228b-4a8f-9919-82c0332d77dd",
			"brand": "toyota",
			"model": "carro muito irado e show do aespa(elétrico)",
			"year": "2017",
			"mileage": 70000,
			"engine": "hybrid",
			"isGoodPrice": true,
			"price": 1222230,
			"color": "pink",
			"description": "we them girls we them girls we them girls",
			"status": true,
			"created_at": "1696919217190",
			"salesImages": [
				{
					"id": "b4f1b737-1d65-4b3e-aab0-46392d1e46f6",
					"imageUrl": "img1",
					"created_at": "1696919217199"
				},
				{
					"id": "cd94fb13-cba3-48df-b658-e74d569eea38",
					"imageUrl": "img2",
					"created_at": "1696919217205"
				},
				{
					"id": "b5deaa55-f73f-4da3-853b-f750cdc99d87",
					"imageUrl": "img3",
					"created_at": "1696919217212"
				}
			],
			"user": {
				"id": "83933a6e-0d4d-48d9-84c1-def33ea4bcc5",
				"firstName": "karina",
				"lastName": "doaespa",
				"userImage": null,
				"description": "oi eu sou a karina do aespa",
				"role": "seller",
				"cellphone": "0123457890",
				"email": "karinaAespa@gmail.com",
				"birthdate": "2023-02-19",
				"cpf": "00000000001"
			}
		}
	]
}
```
### Listar um anúncio por um Id específico

`GET /salesAd/:id - FORMATO DA REQUISIÇÃO`

Não é necessário nenhum corpo de request.

`GET /salesAd/:id - FORMATO DA RESPOSTA - STATUS 200`
```json
{
	"id": "75e75015-228b-4a8f-9919-82c0332d77dd",
	"brand": "toyota",
	"model": "carro muito irado e show do aespa(elétrico)",
	"year": "2017",
	"mileage": 70000,
	"engine": "hybrid",
	"isGoodPrice": true,
	"price": 1222230,
	"color": "pink",
	"description": "we them girls we them girls we them girls",
	"status": true,
	"created_at": "1696919217190",
	"salesImages": [
		{
			"id": "b4f1b737-1d65-4b3e-aab0-46392d1e46f6",
			"imageUrl": "img1",
			"created_at": "1696919217199"
		},
		{
			"id": "cd94fb13-cba3-48df-b658-e74d569eea38",
			"imageUrl": "img2",
			"created_at": "1696919217205"
		},
		{
			"id": "b5deaa55-f73f-4da3-853b-f750cdc99d87",
			"imageUrl": "img3",
			"created_at": "1696919217212"
		}
	],
	"user": {
		"id": "83933a6e-0d4d-48d9-84c1-def33ea4bcc5",
		"firstName": "karina",
		"lastName": "doaespa",
		"userImage": null,
		"description": "oi eu sou a karina do aespa",
		"role": "seller",
		"cellphone": "0123457890",
		"email": "karinaAespa@gmail.com",
		"birthdate": "2023-02-19",
		"cpf": "00000000001"
	},
	"comments": [
		{
			"id": "8d87b47d-a3a5-4684-a570-44915e95ef37",
			"comment": "Muito bom porém editado!",
			"created_at": "1696920086834",
			"user": {
				"id": "c9051b4e-c1e5-468d-b094-6085221eb49f",
				"firstName": "giselle",
				"lastName": "doaespa",
				"email": "giselleAespa@gmail.com",
				"cpf": "00000000002",
				"cellphone": "01234578901",
				"birthdate": "2023-02-19",
				"description": "oi eu sou a giselle do aespa",
				"userImage": null,
				"role": "buyer",
				"created_at": "1696915346061"
			}
		}
	]
}
```

### Listar os anúncios de um vendedor

`GET /salesAd/users/:userId - FORMATO DA REQUISIÇÃO`

Não é necessário nenhum corpo de request.

`GET /salesAd/users/:userId - FORMATO DA RESPOSTA - STATUS 200`


```json
{
	"prevPage": null,
	"nextPage": null,
	"count": 1,
	"user": {
		"id": "83933a6e-0d4d-48d9-84c1-def33ea4bcc5",
		"firstName": "karina",
		"lastName": "doaespa",
		"userImage": null,
		"description": "oi eu sou a karina do aespa",
		"role": "seller",
		"address": {
			"id": "b5fd0169-6810-4974-91b5-cdd351685bd3",
			"cep": "12345678",
			"state": "MG",
			"city": "coreiawinter",
			"street": "rua da winter",
			"addressNumber": 1245,
			"addressComplement": "mansão",
			"created_at": "1696906355872"
		},
		"cellphone": "0123457890",
		"email": "karinaAespa@gmail.com",
		"birthdate": "2023-02-19",
		"cpf": "00000000001"
	},
	"data": [
		{
			"id": "75e75015-228b-4a8f-9919-82c0332d77dd",
			"brand": "toyota",
			"model": "carro muito irado e show do aespa(elétrico)",
			"year": "2017",
			"mileage": 70000,
			"engine": "hybrid",
			"isGoodPrice": true,
			"price": 1222230,
			"color": "pink",
			"description": "we them girls we them girls we them girls",
			"status": true,
			"created_at": "1696919217190",
			"salesImages": [
				{
					"id": "b4f1b737-1d65-4b3e-aab0-46392d1e46f6",
					"imageUrl": "img1",
					"created_at": "1696919217199"
				},
				{
					"id": "cd94fb13-cba3-48df-b658-e74d569eea38",
					"imageUrl": "img2",
					"created_at": "1696919217205"
				},
				{
					"id": "b5deaa55-f73f-4da3-853b-f750cdc99d87",
					"imageUrl": "img3",
					"created_at": "1696919217212"
				}
			]
		}
	]
}
```

### Criar um anúncio

`POST /salesAd - FORMATO DA REQUISIÇÃO`

```json
	{
		"model": "carro muito irado e show do aespa(elétrico)",
		"brand": "toyota",
		"year": "2017",
	        "mileage": 70000,
		"engine": "hybrid",
		"price": 1222230,
		"color": "pink",
	        "isGoodPrice": true,
		"description":"we them girls we them girls we them girls",
		"salesImages":[
			{
				"imageUrl": "img1"
			},
			{
				"imageUrl": "img2"
			},
			{
				"imageUrl": "img3"
			}
	]
}
```
`POST /salesAd - FORMATO DA RESPOSTA - STATUS 201`
```json
{
	"id": "75e75015-228b-4a8f-9919-82c0332d77dd",
	"created_at": "1696919217190",
	"brand": "toyota",
	"model": "carro muito irado e show do aespa(elétrico)",
	"color": "pink",
	"engine": "hybrid",
	"description": "we them girls we them girls we them girls",
	"year": "2017",
	"mileage": 70000,
	"price": 122223000,
	"status": true,
	"isGoodPrice": true,
	"salesImages": [
		{
			"id": "b4f1b737-1d65-4b3e-aab0-46392d1e46f6",
			"imageUrl": "img1",
			"created_at": "1696919217199"
		},
		{
			"id": "cd94fb13-cba3-48df-b658-e74d569eea38",
			"imageUrl": "img2",
			"created_at": "1696919217205"
		},
		{
			"id": "b5deaa55-f73f-4da3-853b-f750cdc99d87",
			"imageUrl": "img3",
			"created_at": "1696919217212"
		}
	]
}
```

### Busca filtrada de anúncios 

`POST /salesAd/filter - FORMATO DA REQUISIÇÃO`

```json
{
	 "color": "pink"
}
```

`POST /salesAd/filter - FORMATO DA RESPOSTA - STATUS 200`
```json
{
	"prevPage": null,
	"nextPage": null,
	"count": 1,
	"data": [
		{
			"id": "75e75015-228b-4a8f-9919-82c0332d77dd",
			"brand": "toyota",
			"model": "carro muito irado e show do aespa(elétrico)",
			"year": "2017",
			"mileage": 70000,
			"engine": "hybrid",
			"isGoodPrice": true,
			"price": 1222230,
			"color": "pink",
			"description": "we them girls we them girls we them girls",
			"status": true,
			"created_at": "1696919217190",
			"salesImages": [
				{
					"id": "b4f1b737-1d65-4b3e-aab0-46392d1e46f6",
					"imageUrl": "img1",
					"created_at": "1696919217199"
				},
				{
					"id": "cd94fb13-cba3-48df-b658-e74d569eea38",
					"imageUrl": "img2",
					"created_at": "1696919217205"
				},
				{
					"id": "b5deaa55-f73f-4da3-853b-f750cdc99d87",
					"imageUrl": "img3",
					"created_at": "1696919217212"
				}
			],
			"user": {
				"id": "83933a6e-0d4d-48d9-84c1-def33ea4bcc5",
				"firstName": "karina",
				"lastName": "doaespa",
				"userImage": null,
				"description": "oi eu sou a karina do aespa",
				"role": "seller",
				"cellphone": "0123457890",
				"email": "karinaAespa@gmail.com",
				"birthdate": "2023-02-19",
				"cpf": "00000000001"
			}
		}
	]
}
```

### Atualiza as informações do anúncio

`PUT /salesAd/:id - FORMATO DA REQUISIÇÃO`
```json
	{
		"model": "carro muito mais  irado e muito mais show e editado com o patch do aespa(elétrico)",
		"brand": "toyota",
		"year": "2020",
	        "mileage": 70000,
		"engine": "hybrid",
		"price": 1222230,
		"color": "pink",
	        "isGoodPrice": true,
		"description":"we them girls we them girls we them girls",
		"salesImages":[
			{
				"imageUrl": "img1"
			},
			{
				"imageUrl": "img2"
			},
			{
				"imageUrl": "img3"
			}
	]
}

```
`PUT /salesAd/:id - FORMATO DA RESPOSTA - STATUS 200`
```json
{
	"id": "75e75015-228b-4a8f-9919-82c0332d77dd",
	"created_at": "1696919217190",
	"brand": "toyota",
	"model": "carro muito irado e show do aespa(elétrico)",
	"color": "pink",
	"engine": "hybrid",
	"description": "we them girls we them girls we them girls",
	"year": "2017",
	"mileage": 70000,
	"price": 122223000,
	"status": true,
	"isGoodPrice": true,
	"salesImages": [
		{
			"id": "13d76dd4-fa86-49cd-bb34-a8f23438fadd",
			"created_at": "1696983718108",
			"imageUrl": "img1"
		},
		{
			"id": "fb843f9b-18df-4079-9991-9598b50527cc",
			"created_at": "1696983718126",
			"imageUrl": "img2"
		},
		{
			"id": "d5c2ae07-2e62-4886-8ff9-50d2a734b542",
			"created_at": "1696983718132",
			"imageUrl": "img3"
		}
	]
}
```

### Deletar um anúncio

`DELETE /salesAd/:id - FORMATO DA REQUISIÇÃO`

Não é necessário nenhum corpo de request.

`DELETE /salesAd/:id - FORMATO DA RESPOSTA - STATUS 204`

Sem corpo de resposta.
