import { Container, DownloadButton } from '../components';

export const SolFeatureAbstract = () => {
  return (
    <section className="w-full">
      <Container className="flex flex-col items-center text-center w-full h-full relative justify-center mx-auto">
        <h1 className="text-[40px] font-medium"> Built for modern minds</h1>
        <p className="text-md max-w-[40ch] mx-auto">
          Crafted to think with you and act for you. Designed to simplify,
          adapt, and remember.
        </p>

        <div className="my-4">
          <DownloadButton size="xl" />
        </div>
      </Container>
    </section>
  );
};
