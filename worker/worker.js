console.log('✅ Worker service started...');

setInterval(() => {
  console.log(`Worker heartbeat: ${new Date().toISOString()}`);
}, 10000);
