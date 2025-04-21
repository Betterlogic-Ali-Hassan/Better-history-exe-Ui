const EntrieDomainIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <rect width='18' height='18' x='3' y='3' rx='2' />
      <path d='M7 7h.01' />
      <path d='M17 7h.01' />
      <path d='M7 17h.01' />
      <path d='M17 17h.01' />
    </svg>
  );
};

export default EntrieDomainIcon;
