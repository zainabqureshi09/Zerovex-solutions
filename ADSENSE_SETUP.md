# Google AdSense Setup Guide - Zerovex Solutions

## ✅ What's Been Configured

### 1. **AdSense Script Added to Site**
- Global AdSense script loaded in `src/app/layout.tsx`
- Publisher ID: `ca-pub-9242974125438337`
- Loads asynchronously after page interactive

### 2. **ads.txt File Created**
- Location: `/public/ads.txt`
- Contains: `google.com, pub-9242974125438337, DIRECT, f08c47fec0942fa0`
- **Accessible at:** `https://zerovexsolutions.site/ads.txt`
- This is required by Google to verify your domain

### 3. **Ad Placement in Blog**
- Blog page (`/blog`) includes a ready-to-use ad unit
- Replace `YOUR_AD_SLOT_ID` with your actual ad slot ID from AdSense dashboard

### 4. **Google Verification in Metadata**
- Added verification tag to site metadata
- Helps Google verify ownership

## 📋 Next Steps to Complete AdSense Setup

### Step 1: Create Ad Units in AdSense Dashboard
1. Go to [Google AdSense](https://www.google.com/adsense)
2. Sign in with your Google account
3. Navigate to **Ads > By ad unit**
4. Create new ad units (Display ads recommended)
5. Copy the **Ad Slot ID** for each unit

### Step 2: Update Ad Slot IDs
In `src/app/blog/page.tsx`, replace:
```tsx
data-ad-slot="YOUR_AD_SLOT_ID"
```
with your actual slot ID:
```tsx
data-ad-slot="1234567890"  // Your actual slot ID
```

### Step 3: Add More Ad Placements (Optional)

You can add ads to other pages. Here's an example for the homepage:

```tsx
{/* In any page where you want ads */}
<ins
  className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-9242974125438337"
  data-ad-slot="YOUR_SLOT_ID"
  data-ad-format="auto"
  data-full-width-responsive="true"
/>
```

### Step 4: Submit Your Site for Review
1. In AdSense dashboard, add your site: `https://zerovexsolutions.site`
2. Google will review your site (usually takes 1-2 days)
3. Once approved, ads will start showing

### Step 5: Verify ads.txt is Accessible
After deploying, visit:
```
https://zerovexsolutions.site/ads.txt
```
You should see:
```
google.com, pub-9242974125438337, DIRECT, f08c47fec0942fa0
```

## 💡 Recommended Ad Placements

### High-Converting Locations:
1. **Blog sidebar** (if you add one)
2. **Between blog posts** (currently implemented)
3. **Below article content**
4. **Header banner** (non-intrusive)
5. **Footer area**

### Example: Add Ad Between Blog Articles

```tsx
// After every 3rd blog post
{index > 0 && (index + 1) % 3 === 0 && (
  <div className="my-8 p-6 rounded-xl border" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface-card)' }}>
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-9242974125438337"
      data-ad-slot="YOUR_SLOT_ID"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </div>
)}
```

## 📊 AdSense Best Practices

✅ **Do:**
- Use responsive ad units
- Place ads above the fold
- Keep ads relevant to content
- Monitor performance regularly
- Follow Google's policies

❌ **Don't:**
- Click your own ads
- Place too many ads (max 3 per page recommended)
- Cover content with ads
- Use intrusive ad formats

## 🔍 Testing Your Setup

### 1. Check ads.txt
```bash
# After deployment
curl https://zerovexsolutions.site/ads.txt
```

### 2. Verify AdSense Script
Open browser console on your site and check:
```javascript
// Should return the adsbygoogle object
console.log(window.adsbygoogle)
```

### 3. Check Page Source
View page source and search for:
- `ca-pub-9242974125438337`
- `adsbygoogle.js`

## 📈 Monitoring

Once live, monitor your earnings and performance:
- [AdSense Dashboard](https://www.google.com/adsense)
- Check impressions, clicks, and revenue
- Optimize placements based on performance

## 🎯 Ad Slot Management

Keep track of your ad slots:

| Location | Slot ID | Status |
|----------|---------|--------|
| Blog - Between Posts | YOUR_SLOT_ID | ⏳ Pending |
| (Add more as needed) | | |

## 📞 Support

- **AdSense Help Center:** https://support.google.com/adsense
- **Policy Center:** https://www.google.com/adsense/policies
- **Zerovex Email:** hello@zerovexsolutions.site

---

**Note:** It typically takes 24-48 hours for Google to review and approve your site. Once approved, ads will automatically start appearing in the configured placements.
