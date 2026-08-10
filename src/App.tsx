import { ShoppingBag, Store, Package, ArrowRight, ShieldCheck } from 'lucide-react';
import { PROFILE_DATA, MAIN_LINKS, INFO_CARDS } from './data';
import type { LinkCard, LinkVariant } from './data';
import './index.css';

function WhatsAppGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20l1.1-5.4A8.5 8.5 0 1 1 21 11.5z" />
    </svg>
  );
}

const ICONS: Record<LinkVariant, React.ReactNode> = {
  mercadolivre: <ShoppingBag size={26} strokeWidth={2} />,
  shopee: <Store size={26} strokeWidth={2} />,
  amazon: <Package size={26} strokeWidth={2} />,
  whatsapp: <WhatsAppGlyph size={26} />,
};

function LinkCardItem({ card, index }: { card: LinkCard; index: number }) {
  return (
    <a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-card link-card--${card.variant} animate-in`}
      style={{ animationDelay: `${0.15 + index * 0.07}s` }}
      aria-label={`${card.title} — ${card.cta}`}
    >
      {card.badge && <span className="link-card__badge">{card.badge}</span>}
      <div className="link-card__icon" aria-hidden="true">
        {ICONS[card.variant]}
      </div>
      <span className="link-card__eyebrow">{card.eyebrow}</span>
      <h3 className="link-card__title">{card.title}</h3>
      <p className="link-card__desc">{card.description}</p>
      {card.displayUrl && <span className="link-card__url">{card.displayUrl}</span>}
      <span className="link-card__cta">
        {card.cta}
        <ArrowRight size={16} strokeWidth={2.5} className="link-card__arrow" />
      </span>
    </a>
  );
}

function App() {
  return (
    <div className="page">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <div className="page-shell">
        <header className="header animate-in">
          <img src={PROFILE_DATA.logoUrl} alt="Agilizza" className="header__logo" />
          <a
            href={PROFILE_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header__whatsapp"
            aria-label="Falar com a Agilizza no WhatsApp"
          >
            <WhatsAppGlyph size={18} />
            WhatsApp
          </a>
        </header>

        <main className="layout">
          <aside className="profile-card animate-in delay-1">
            <div className="profile-card__avatar">
              <img src={PROFILE_DATA.avatarUrl} alt={`Foto de ${PROFILE_DATA.name}, técnico da Agilizza`} />
            </div>
            <div className="profile-card__text">
              <h1>{PROFILE_DATA.name}</h1>
              <p className="profile-card__brand">{PROFILE_DATA.brand}</p>
              <p className="profile-card__tagline">{PROFILE_DATA.tagline}</p>
            </div>
            <div className="trust-card">
              <ShieldCheck size={20} strokeWidth={2} aria-hidden="true" />
              <div>
                <strong>Links oficiais</strong>
                <span>Atualizados com frequência</span>
              </div>
            </div>
          </aside>

          <section className="content">
            <div className="content__head animate-in delay-2">
              <h2>Conheça nossos links e ofertas</h2>
              <p>Tudo selecionado para facilitar suas compras.</p>
            </div>

            <div className="links-grid">
              {MAIN_LINKS.map((card, i) => (
                <LinkCardItem key={card.id} card={card} index={i} />
              ))}
            </div>

            <div className="info-grid animate-in delay-3">
              {INFO_CARDS.map((info) => (
                <div
                  key={info.title}
                  className={`info-card${info.desktopOnly ? ' info-card--desktop' : ''}`}
                >
                  <h4>{info.title}</h4>
                  <p>{info.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="footer animate-in delay-3">
          <p>Agilizza — soluções e boas indicações em um só lugar.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
