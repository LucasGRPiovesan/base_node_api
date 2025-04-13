#!/bin/bash

# Script desenvolvido para mais praticidade em ambiente de desenvolvimento

# Inicia o contêiner
docker compose up -d

# Nome do contêiner (substitua pelo nome real do seu contêiner)
CONTAINER_NAME="base-node-api-back-end"

# Caminho dentro do contêiner que deseja abrir no VS Code
CONTAINER_PATH="/app"

# Aguarda o contêiner estar em execução
echo "Aguardando o contêiner $CONTAINER_NAME iniciar..."
until docker ps --filter "name=^/${CONTAINER_NAME}$" --format "{{.ID}}" | grep -q .; do
  sleep 1
done

# Obtém o ID completo do contêiner com base no nome
CONTAINER_ID=$(docker ps --filter "name=^/${CONTAINER_NAME}$" --format "{{.ID}}")

# Verifica se o contêiner foi encontrado
if [ -z "$CONTAINER_ID" ]; then
  echo "Contêiner com o nome '$CONTAINER_NAME' não encontrado."
  exit 1
fi

# Codifica o ID do contêiner em hexadecimal
HEX_ID=$(echo -n "$CONTAINER_ID" | od -A n -t x1 | tr -d ' \n')

# Abre o VS Code no diretório especificado dentro do contêiner
code --folder-uri "vscode-remote://attached-container+$HEX_ID$CONTAINER_PATH"

# Exibe os logs do contêiner em tempo real em segundo plano
echo "Exibindo logs do contêiner $CONTAINER_NAME..."
docker logs -f $CONTAINER_ID

