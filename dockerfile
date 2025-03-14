# 1. ベースイメージ (Node.js 18)
FROM node:18

# 2. 作業ディレクトリを作成
WORKDIR /app

# 3. pnpm をインストール
RUN npm install -g pnpm

# 4. package.json と pnpm-lock.yaml をコピー
COPY package.json pnpm-lock.yaml ./

# 5. 依存関係をインストール
RUN pnpm install

# 6. ソースコードをコピー
COPY . .

# 7. 環境変数を設定（開発モード）
ENV NODE_ENV=development

# 8. Next.js の開発サーバーを起動
CMD ["pnpm", "run", "dev"]