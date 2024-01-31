const API = "http://localhost:3333";

const endpoint = (path: string): string => API + path;

const get = async (path: string): Promise<any> => {
    return fetch(endpoint(path)).then((res) => res.json());
};

const post = async (
    path: string,
    title: string,
    content: string,
    favorite: boolean,
    color: string
): Promise<any> => {
    return fetch(endpoint(path), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            content: content,
            favorite: favorite,
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
            throw new Error(`Erro ao criar o recurso: ${error.message}`);
        });
};

const put = async (
    path: string,
    title: string,
    content: string,
    favorite: boolean,
    color: string
): Promise<any> => {
    return fetch(endpoint(path), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            content: content,
            favorite: favorite,
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

export const updateTarefa = async (
    id: number,
    title: string,
    content: string,
    favorite: boolean,
    color: string
) => {
    return put(`/api/tarefas/${id}`, title, content, favorite, color);
};

export const deleteCard = async (id: number) => {
    return drop(`/api/tarefas/${id}`);
};

export const createNewCard = async (
    title: string,
    content: string,
    favorite: boolean,
    color: string
) => {
    return post(`/api/tarefas/`, title, content, favorite, color);
};
