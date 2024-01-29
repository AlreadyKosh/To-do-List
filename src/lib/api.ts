const API = "http://localhost:3333";

const endpoint = (path: string): string => API + path;

const get = async (path: string): Promise<any> => {
    return fetch(endpoint(path)).then((res) => res.json());
};

const put = async (path: string, color: string): Promise<any> => {
    return fetch(endpoint(path), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            // Adicione cabeçalhos de autenticação ou outros cabeçalhos necessários aqui
        },
        body: JSON.stringify({
            background_color: color,
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
            return response.json();
        })
        .catch((error) => {
            throw new Error(`Erro ao atualizar a cor: ${error.message}`);
        });
};

const drop = async (path: string): Promise<any> => {
    return fetch(endpoint(path), {
        method: "DELETE",
        headers: {},
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
            return response.json();
        })
        .catch((error) => {
            throw new Error(`Erro ao excluir objeto: ${error.message}`);
        });
};

export const getTarefas = async () => {
    return get("/api/tarefas");
};

export const putColor = async (id: number, color: string) => {
    return put(`/api/tarefas/${id}`, color);
};

export const deleteCard = async (id: number) => {
    return drop(`/api/tarefas/${id}`);
};