# Static Site Server

## API Usage Examples

### cURL

```bash
# Landing page
curl http://localhost:3000/

# Fetch CSS asset
curl http://localhost:3000/assets/css/main.css -o main.css

# Fallback route
curl http://localhost:3000/some/random/path
```

### Browser Fetch

```js
// Landing page
fetch('http://localhost:3000/')
  .then(r => r.text())
  .then(html => console.log(html));

// Asset
fetch('http://localhost:3000/assets/css/main.css')
  .then(r => r.text())
  .then(css => console.log(css));
```

### TypeScript SDK

```ts
import { StaticSiteSDK } from './sdk';

(async () => {
  const api = new StaticSiteSDK({ baseURL: 'http://localhost:3000' });

  // Landing page
  const index = await api.getIndex();
  console.log(index.data);

  // Asset
  const css = await api.getAsset('css/main.css');
  console.log(css.data);
})();
```