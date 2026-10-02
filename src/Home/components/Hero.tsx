import { ShieldIcon, WalletIcon } from "./Icons";
import { CategoryQuickCard } from "./CategoryQuickCard";

export function Hero() {
  return (
    <section className='lm-hero' aria-labelledby='lm-hero-title'>
      <div className='lm-hero__right'>
        <CategoryQuickCard />

        <ul className='lm-hero__trust'>
          <li>
            <ShieldIcon className='lm-hero__trust-icon' />
            <span>
              <strong>Verified sellers</strong>
              <span>Every listing reviewed</span>
            </span>
          </li>
          <li>
            <WalletIcon className='lm-hero__trust-icon' />
            <span>
              <strong>One wallet</strong>
              <span>For every order and plan</span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
