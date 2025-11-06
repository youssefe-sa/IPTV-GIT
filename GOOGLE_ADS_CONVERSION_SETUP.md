# Configuration du suivi des conversions Google Ads

Ce guide vous explique comment configurer le suivi des conversions Google Ads pour votre application IPTV.

## Étape 1 : Créer une conversion dans Google Ads

1. Connectez-vous à votre compte [Google Ads](https://ads.google.com)
2. Cliquez sur l'icône d'outils (🔧) dans la barre de navigation supérieure
3. Sélectionnez "Conversions" sous la section "Mesure"
4. Cliquez sur le bouton bleu "+" pour créer une nouvelle conversion
5. Choisissez "Site web" comme source de conversion
6. Sélectionnez le type de conversion :
   - Catégorie : "Achat"
   - Nom de la conversion : "Abonnement IPTV"
   - Valeur : Choisissez "Utiliser la même valeur pour chaque conversion" et entrez 1
   - Comptage : "Une" (pour ne compter qu'une conversion par achat)
   - Cliquez sur "Créer et continuer"

## Étape 2 : Configurer le tag de suivi

1. Sur la page de configuration du tag, sélectionnez "Installer le tag vous-même"
2. Copiez les deux parties du code fourni :
   - La balise Google (gtag.js) globale
   - Le code d'événement de conversion

## Étape 3 : Mettre à jour le code du projet

1. Dans le fichier `index.html`, assurez-vous que la balise Google est présente dans le `<head>` :
   ```html
   <!-- Global site tag (gtag.js) - Google Ads: VOTRE_ID_DE_CONVERSION -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=AW-VOTRE_ID"></script>
   ```

2. Dans le fichier `src/hooks/useGoogleAnalytics.ts`, remplacez les valeurs suivantes :
   ```typescript
   // Remplacer par votre ID de conversion Google Ads
   window.gtag('config', 'AW-VOTRE_ID');
   
   // Dans la fonction trackConversion, remplacez l'ID de conversion
   window.gtag('event', 'conversion', {
     'send_to': 'AW-VOTRE_ID/VOTRE_ETIQUETTE_DE_CONVERSION',
     'value': 1.0,
     'currency': 'USD',
     'transaction_id': `TXN_${Date.now()}`
   });
   ```

## Étape 4 : Tester la configuration

1. Activez le mode "Enregistrer cette conversion comme clé" dans les paramètres de la conversion
2. Effectuez un achat de test sur votre site
3. Vérifiez dans Google Ads que la conversion est bien enregistrée (peut prendre jusqu'à 24h)
4. Désactivez le mode test une fois la configuration validée

## Dépannage

- Si les conversions ne s'affichent pas :
  - Vérifiez que le tag est correctement installé avec Google Tag Assistant
  - Assurez-vous que le même compte Google est connecté dans votre navigateur et Google Ads
  - Vérifiez la console du navigateur pour les erreurs JavaScript

## Meilleures pratiques

- Ne modifiez pas la structure du code de suivi
- Conservez les valeurs de transaction uniques pour éviter les doublons
- Testez toujours en environnement de développement avant de déployer en production

## Documentation officielle

- [Suivi des conversions Google Ads](https://support.google.com/google-ads/answer/1722022)
- [Guide d'installation des balises](https://support.google.com/google-ads/answer/1722054)
- [Dépannage des conversions](https://support.google.com/google-ads/answer/3438531)
