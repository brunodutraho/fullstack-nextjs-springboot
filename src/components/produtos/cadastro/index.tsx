import { LayoutMenu } from "@/components";

export const CadastroProdutos: React.FC = () => {
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
							type="text"
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
							type="text"
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
							type="text"
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
							placeholder="Digite a descrição detalhada do produto"
							className="textarea"
						/>
					</div>
				</div>
			</div>
			<div className="field is-grouped">
				<div className="control">
					<button type="button" className="button is-link">
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
