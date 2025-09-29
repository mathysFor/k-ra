# Kura Deeplink (Express + EJS)

Auto-redirect vers l'app mobile via deeplink, avec fallback App Store / Play Store. 
Passe `?path=/ton/route&data=payload` pour router dans l'app.

## 1) Installation
```bash
cd kura-deeplink-express
npm i
cp .env.example .env
# Édite .env avec tes valeurs
npm run dev
```

Serveur local: http://localhost:3000

## 2) Test sur téléphone (même Wi-Fi)
- Trouve l'IP de ton Mac (ex: 192.168.3.51)
- Ouvre: `http://192.168.3.51:3000/deeplink?path=/rituel/42&data=abc`

## 3) Variables d'environnement
- `PORT` (optionnel, défaut 3000)
- `SCHEME` (ex: `kura` -> `kura://...`)
- `ANDROID_PKG` (ex: `com.mathysfornasier.kura`)
- `IOS_APP_ID` (ex: `1234567890`)
- `WEB_FALLBACK` (ex: `https://kura.example.com`)

## 4) Routes
- `/` → health check
- `/deeplink?path=/rituel/42&data=abc` → auto deeplink

## 5) Déploiement
Peut être déployé tel quel sur un VPS, Fly, Railway, Render, etc. 
Pour Vercel/Netlify en statique : préfère une version HTML statique.
