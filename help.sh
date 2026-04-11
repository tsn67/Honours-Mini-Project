# run start hpc env
# login into hpc vpn
# start ssh section

# start simulation docker container
CUDA_VISIBLE_DEVICES=5 docker run   --gpus '"device=5"'   -p 7227:8000   --shm-size=16g   -v /shared/hf_cache:/root/.cache/huggingface   vllm/vllm-openai:latest   deepseek-ai/deepseek-coder-6.7b-instruct   --dtype float16   --gpu-memory-utilization 0.4   --max-model-len 4096   --api-key token123

# start backend server
cd backend
npm run dev

# start front end react server
cd frontend
npm run dev
