# OPENFORMAT NextJS Starter

The most basic implementation of OPENFORMAT using NextJS.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/open-format/next-js-example.git
```

2. go to the project root:

```bash
cd next-js-example
```

3. Install the dependencies:

```bash
yarn install
# or
npm install
# or
pnpm install
# or
bun install
```

4. Copy the environment variables:

```bash
cp .env.local.example .env.local
```

### Required Environment Variables

| Variable                  | Description                                                      | Example Value                                |
| ------------------------- | ---------------------------------------------------------------- | -------------------------------------------- |
| `PRIVATE_KEY`             | Private Key of the account that deployed the OPENFORMAT contract | `0xd52532cbc891b3af65c2c5be980d0f22c419d885` |
| `APPLICATION_ID`          | APPLICATION ID generated in https://app.openformat.tech          | `0xd52532cbc891b3af65c2c5be980d0f22c419d885` |
| `NEXT_PUBLIC_XP_TOKEN_ID` | XP TOKEN ID generated in https://app.openformat.techKey          | `0x7bc4da84cd569a72a0b66eb8583c106b4f6b83d9` |
| `REWARD_TOKEN_ID`         | REWARD TOKEN ID generated in https://app.openformat.techKey      | `0x904ef31727ad22674f1750fe04e9a8042f09b123` |

5. run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
