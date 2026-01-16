# Domain Setup Guide: hrishivuk.com

This guide will help you connect your GoDaddy domain (`hrishivuk.com`) to your Netlify-hosted portfolio.

## ✅ Step 1: Update Environment Variables in Netlify

1. Go to your Netlify dashboard
2. Navigate to your site → **Site settings** → **Environment variables**
3. Add or update the following variable:
   ```
   NEXT_PUBLIC_SITE_URL = https://hrishivuk.com
   ```
4. Click **Save**

## ✅ Step 2: Add Custom Domain in Netlify

1. In your Netlify dashboard, go to your site
2. Navigate to **Site settings** → **Domain management**
3. Click **Add custom domain**
4. Enter: `hrishivuk.com`
5. Click **Verify**
6. Netlify will show you DNS configuration options

## ✅ Step 3: Configure DNS in GoDaddy

You have two options:

### Option A: Use Netlify DNS (Recommended - Easier)

1. In Netlify's domain settings, you'll see nameservers (e.g., `dns1.p01.nsone.net`, `dns2.p01.nsone.net`)
2. Go to [GoDaddy Domain Manager](https://dcc.godaddy.com/)
3. Find your domain `hrishivuk.com`
4. Click on it → **DNS** or **Manage DNS**
5. Scroll to **Nameservers** section
6. Click **Change** → **Custom**
7. Replace the existing nameservers with Netlify's nameservers
8. Click **Save**
9. Wait 24-48 hours for DNS propagation

### Option B: Keep GoDaddy DNS (More Control)

If you prefer to keep GoDaddy DNS, you'll need to add DNS records:

1. In Netlify's domain settings, note the DNS records you need to add
2. Go to GoDaddy Domain Manager → **DNS** for `hrishivuk.com`
3. Add the following records:

   **For root domain (hrishivuk.com):**
   - **Type**: A
   - **Name**: @
   - **Value**: Netlify's IP (usually `75.2.60.5` - check Netlify dashboard)
   - **TTL**: 600

   **For www subdomain (www.hrishivuk.com):**
   - **Type**: CNAME
   - **Name**: www
   - **Value**: Your Netlify site URL (e.g., `your-site-name.netlify.app`)
   - **TTL**: 600

4. Save all records
5. Wait 24-48 hours for DNS propagation

## ✅ Step 4: Enable HTTPS (Automatic)

Netlify will automatically provision an SSL certificate once DNS is configured. This usually takes a few minutes to a few hours after DNS propagation.

## ✅ Step 5: Verify Everything Works

1. Wait for DNS propagation (can take up to 48 hours, usually much faster)
2. Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net/#A/hrishivuk.com)
3. Visit `https://hrishivuk.com` in your browser
4. Verify HTTPS is working (padlock icon in browser)
5. Test all pages:
   - Home: `https://hrishivuk.com`
   - Works: `https://hrishivuk.com/works`
   - About: `https://hrishivuk.com/aboutme`
   - Contact: `https://hrishivuk.com/contact`

## ✅ Step 6: Update .env.local (Local Development)

Update your local `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://hrishivuk.com
```

## 🔍 Troubleshooting

### Domain not resolving?
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net/#A/hrishivuk.com)
- Verify DNS records in GoDaddy match Netlify's requirements
- Wait up to 48 hours for full propagation

### HTTPS not working?
- Netlify automatically provisions SSL certificates
- If it's taking more than 24 hours, check Netlify's SSL/TLS settings
- Ensure DNS is fully propagated first

### Site shows Netlify default page?
- Verify the domain is correctly added in Netlify
- Check that your site is deployed and active
- Ensure DNS records point to the correct Netlify site

### Need to redirect www to non-www (or vice versa)?
- In Netlify: **Site settings** → **Domain management** → **Domain options**
- Enable "Force HTTPS" and choose your preferred domain

## 📝 Quick Checklist

- [ ] Added `NEXT_PUBLIC_SITE_URL=https://hrishivuk.com` in Netlify environment variables
- [ ] Added custom domain in Netlify dashboard
- [ ] Updated DNS records in GoDaddy (nameservers or A/CNAME records)
- [ ] Waited for DNS propagation (check with whatsmydns.net)
- [ ] Verified HTTPS is working
- [ ] Tested all pages on the new domain
- [ ] Updated local `.env.local` file

## 🎉 You're Done!

Once DNS propagates and HTTPS is active, your portfolio will be live at `https://hrishivuk.com`!

---

**Note**: DNS changes can take 24-48 hours to fully propagate worldwide, but often work within a few hours. Be patient and check periodically.

