CSS COLORS:
@theme {
--color-primary: #2C2C2C;
--color-secondary: #4A90E2;
--color-accent: #7CFC00;  
 --color-overlayTransparent: #0000007f;
--color-hoverAccent: #6BE200;
--color-hoverSecondary: #3A80D2;

}

Extra Space in HTML:
&nbsp;

<pre> feature with text wrap : --> whitespace-pre-wrap <--- used in css and texts under div in {``}

1. Header Done -- headerArea.js
2. Hero Done -- hero.js
3. Algorithm Choose Page Done -- algoArea.js
4. Linear Code Choose from Languages Bar Done 
5. Initialized Git and Commited first PUSH


--------


Colors for Light-Mode:
lightPrimary:#F8F9FA
lightSecondary:#2E8B57
lightAccent:#FF6B6B
hoverLightAccent: #E55A5A
secondaryLightButton #88C999
hoverSecondaryLightButton #70B080

-----------

Headings: text on lightPrimary:#333333
Body: text on lightPrimary:#4A4A4A
Code: text on lightPimary:#2E8B57
Border: #E0E0E0


----------


FONT SIZE OF syntaxHighlighter

/* Target the <pre> and <code> elements */
pre[class*="language-"],
code[class*="language-"] {
  font-size: 14px; /* Adjust the font size */
  line-height: 1.5; /* Adjust line height for better readability */
}

/* Optional: Adjust line numbers font size */
.line-numbers .line-numbers-rows {
  font-size: 14px;
}


1. What is noopener noreferrer?
When you use the target="_blank" attribute in an anchor (<a>) tag to open a link in a new tab, it’s a good practice to add rel="noopener noreferrer" for security and performance reasons.

noopener:

Prevents the new page from accessing the window.opener property of the original page.

This protects your site from potential security vulnerabilities (e.g., phishing attacks).

noreferrer:

Prevents the new page from knowing the origin of the link (i.e., it hides the Referer header).

This is useful for privacy and security.


//////////////////////////////////

Sure! Let’s dive deeper into what `noopener` does and why it’s important for **security**.

---

### **What is `window.opener`?**

When you open a new tab or window using `target="_blank"` in an anchor (`<a>`) tag, the new page can access the `window.opener` property of the original page. This property allows the new page to interact with the original page’s `window` object.

#### Example:
```html
<a href="https://malicious-site.com" target="_blank">
  Click Me
</a>
```
If a user clicks this link, `malicious-site.com` can access the `window.opener` property of your site.

---

### **What Can `window.opener` Do?**

The `window.opener` property allows the new page to:
1. **Modify the Original Page**:
   - The new page can change the `location` of the original page, redirecting it to a malicious site.
   - Example:
     ```javascript
     window.opener.location = 'https://phishing-site.com';
     ```

2. **Access Sensitive Information**:
   - If the original page contains sensitive data (e.g., user information), the new page can potentially access it.

3. **Perform Actions on Behalf of the User**:
   - The new page can trigger actions (e.g., form submissions) in the original page without the user’s knowledge.

---

### **How Does `noopener` Help?**

The `rel="noopener"` attribute prevents the new page from accessing the `window.opener` property. This ensures that:
1. **The New Page Cannot Modify the Original Page**:
   - The new page cannot change the `location` or interact with the original page in any way.

2. **The Original Page is Protected**:
   - Sensitive information and user actions on the original page remain secure.

3. **Prevents Phishing Attacks**:
   - Attackers cannot redirect users to malicious sites or perform unauthorized actions.

---

### **Example Without `noopener`**

#### HTML:
```html
<a href="https://malicious-site.com" target="_blank">
  Click Me
</a>
```

#### JavaScript on `malicious-site.com`:
```javascript
// This will redirect the original page to a phishing site
window.opener.location = 'https://phishing-site.com';
```

---

### **Example With `noopener`**

#### HTML:
```html
<a href="https://malicious-site.com" target="_blank" rel="noopener">
  Click Me
</a>
```

#### JavaScript on `malicious-site.com`:
```javascript
// This will fail because `window.opener` is null
window.opener.location = 'https://phishing-site.com';
```

---

### **Why Use `noreferrer` Alongside `noopener`?**

The `rel="noreferrer"` attribute does two things:
1. **Hides the Referrer**:
   - It prevents the new page from knowing the origin of the link (i.e., it hides the `Referer` header).
   - This is useful for privacy and security.

2. **Implicitly Enables `noopener`**:
   - Even if you forget to add `noopener`, `noreferrer` ensures that `window.opener` is null.

#### Example:
```html
<a href="https://malicious-site.com" target="_blank" rel="noreferrer">
  Click Me
</a>
```

---

### **When to Use `noopener noreferrer`**

Always use `rel="noopener noreferrer"` when:
1. **Opening External Links**:
   - Links to third-party sites should always include `noopener noreferrer` to protect your site and users.

2. **Using `target="_blank"`**:
   - Any link that opens in a new tab should include `noopener noreferrer`.

3. **Handling User-Generated Content**:
   - If your site allows users to post links (e.g., comments, forums), ensure that these links include `noopener noreferrer`.

---

### **Example in React**

Here’s how you can use `noopener noreferrer` in a React component:

```javascript
import React from 'react';

const ExternalLink = () => {
  return (
    <a
      href="https://malicious-site.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Click Me (Safe)
    </a>
  );
};

export default ExternalLink;
```

---

### **Summary**

- **`noopener`**:
  - Prevents the new page from accessing the `window.opener` property of the original page.
  - Protects your site from malicious actions like phishing and unauthorized redirects.

- **`noreferrer`**:
  - Hides the `Referer` header for privacy and security.
  - Implicitly enables `noopener`.

- **Best Practice**:
  - Always use `rel="noopener noreferrer"` when opening external links in a new tab.

---

By using `noopener noreferrer`, you ensure that your site and users are protected from potential security vulnerabilities. Let me know if you have more questions! 🚀