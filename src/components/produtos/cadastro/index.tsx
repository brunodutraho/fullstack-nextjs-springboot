'use client'
import { useState } from 'react'
import { LayoutMenu } from "@/components";

export const CadastroProdutos: React.FC = () => {

	const [ sku, setSku ] = useState('')
	const [ preco, setPreco ] = useState('')
	const [ nome, setNome ] = useState('')
	const [ descricao, setDescricao ] = useState('')

	const submit = () => {
		const produto = {
			sku, preco, nome, descricao
		}
		console.log(produto)
	}

	return (
		<LayoutMenu titulo="Cadastro de Produtos">
			<div className="columns">
				<div className="field column is-half">
					<label htmlFor="inputSku" className="label">
						SKU: *
					</label>
					<div className="control">
						<input
							id="inputSku"
							type="text" value={sku} onChange={e => setSku(e.target.value)}
							placeholder="Digite o SKU do produto"
							className="input"
						/>
					</div>
				</div>

				<div className="field column is-half">
					<label htmlFor="inputPreco" className="label">
						Preço: *
					</label>
					<div className="control">
						<input
							id="inputPreco"
							type="text" value={preco} onChange={e => setPreco(e.target.value)}
							placeholder="Digite o preço do produto"
							className="input"
						/>
					</div>
				</div>
			</div>
			<div className="columns">
				<div className="field column is-full">
					<label htmlFor="inputNome" className="label">
						Nome: *
					</label>
					<div className="control">
						<input
							id="inputNome"
							type="text" value={nome} onChange={e => setNome(e.target.value)}
							placeholder="Digite o nome do produto"
							className="input"
						/>
					</div>
				</div>
			</div>
			<div className="columns">
				<div className="field column is-full">
					<label htmlFor="inputDesc" className="label">
						Descrição: *
					</label>
					<div className="control">
						<textarea
							id="inputDesc"
							type="text" value={descricao} onChange={e => setDescricao(e.target.value)}
							placeholder="Digite a descrição detalhada do produto"
							className="textarea"
						/>
					</div>
				</div>
			</div>
			<div className="field is-grouped">
				<div className="control">
					<button type="submit" onClick={submit} className="button is-link">
						Salvar
					</button>
				</div>
				<div className="control">
					<button type="button" className="button is-link is-light">
						Voltar
					</button>
				</div>
			</div>
		</LayoutMenu>
	);
};
