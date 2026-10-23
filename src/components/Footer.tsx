type FooterProps = {
  showMessage?: boolean;
};

export default function Footer({ showMessage = false }: FooterProps) {
  return (
    <footer className="splash-footer">
      {showMessage && "Improve student readiness by posting ideas about your courses!"}
    </footer>
  );
}
