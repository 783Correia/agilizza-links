import { ExternalLink, ShoppingBag, ArrowRight } from 'lucide-react';
import { PROFILE_DATA, PRODUCTS } from './data';
import type { Product } from './data';
import './index.css';

function App() {
  return (
    <>
      {/* Profile Section */}
      <header className="profile-section animate-in">
        <div className="avatar-wrapper">
          <div className="avatar-inner">
            <img
              src={PROFILE_DATA.avatarUrl}
              alt={PROFILE_DATA.name}
              className="profile-img"
            />
          </div>
        </div>
        <div className="profile-content">
          <h1 className="profile-title">{PROFILE_DATA.name}</h1>
          <p className="profile-bio">{PROFILE_DATA.bio}</p>
        </div>
      </header>

      {/* Main Link Section */}
      <section className="animate-in delay-1">
        <a
          href={PROFILE_DATA.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="main-link-btn"
        >
          {PROFILE_DATA.websiteButtonLabel}
          <ExternalLink size={18} strokeWidth={2.5} />
        </a>
      </section>

      {/* Products Section */}
      <section className="animate-in delay-2">
        <div className="section-header">
          <ShoppingBag size={18} className="section-icon" color="var(--brand-green)" />
          <h2 className="section-title">Recomendações</h2>
          <div className="section-line"></div>
        </div>

        <div className="product-list">
          {PRODUCTS.map((product: Product, index: number) => (
            <a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card animate-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="product-img-wrapper">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="product-img"
                  loading="lazy"
                />
              </div>

              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className="price-row">
                  <span className="product-price">{product.price}</span>
                  <span className={`platform-badge ${product.platform}`}>
                    {product.platform === 'shopee' ? 'Shopee' : 'Mercado Livre'}
                  </span>
                </div>
              </div>

              <div className="action-icon">
                <ArrowRight size={18} strokeWidth={2.5} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer animate-in delay-3">
        <p>© {new Date().getFullYear()} {PROFILE_DATA.name}. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
