"use client";
import { useState } from "react";
import { LayoutMenu, Input } from "@/components";

export const CadastroProdutos: React.FC = () => {
	const [sku, setSku] = useState("");
	const [preco, setPreco] = useState("");
	const [nome, setNome] = useState("");
	const [descricao, setDescricao] = useState("");

	const submit = () => {
		const produto = {
			sku,
			preco,
			nome,
			descricao,
		};
		console.log(produto);
	};

	return (
		<LayoutMenu titulo="Cadastro de Produtos">
			<div className="columns">
				<Input  
					label="SKU: *"
					type='text' 
					value={sku}
					id='inputSku'
					placeholder='Digite o sku do produto'
					onChange={setSku}
					columnClasses="is-half" 
				/>

				<Input  
					label="Preço: *"
					type='text' 
					value={preco}
					id='inputPreco'
					placeholder='Digite o preço do produto'
					onChange={setPreco}
					columnClasses="is-half" 
				/>
			</div>
			<div className="columns">
				<Input  
					label="Nome: *"
					type='text' 
					value={nome}
					id='inputNome'
					placeholder='Digite o nome do produto'
					onChange={setNome}
					columnClasses="is-full" 
				/>
				<div className="field column is-full">
					<label htmlFor="inputNome" className="label">
						Nome: *
					</label>
					<div className="control">
						<input
							id="inputNome"
							type="text"
							value={nome}
							onChange={(e) => setNome(e.target.value)}
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
							type="text"
							value={descricao}
							onChange={(e) => setDescricao(e.target.value)}
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
