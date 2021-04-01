const signInProcessResponse = (loginResponse: any) => ({
    avatar: loginResponse.avatar_url,
    name: loginResponse.name,
    repo: loginResponse.url,
    userId: loginResponse.id,
});

export default { signInProcessResponse };
