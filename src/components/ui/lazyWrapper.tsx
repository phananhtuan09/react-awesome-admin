import React, { Suspense, ComponentType } from 'react';
import LoadingProgressBar from './loadingProgressBar';

const LazyWrapper = <P extends object>(
  LazyComponent: React.LazyExoticComponent<ComponentType<P>>,
) => {
  return (props: P) => (
    <Suspense fallback={<LoadingProgressBar />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyWrapper;
