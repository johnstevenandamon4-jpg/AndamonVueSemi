<template>
  <div>
    <nav>
      <RouterLink to='/'>Library Home</RouterLink>
      |
      <RouterLink :to="{ name: 'Announcement' }">Announcement</RouterLink>
      |
      <RouterLink :to="{ name: 'Books' }">Books</RouterLink>
      |
      <RouterLink :to="{ name: 'Archives' }">Archives</RouterLink>
      |
      <RouterLink :to="{ name: 'RegistrationForm' }">Registration Form</RouterLink>
    </nav>

    <br>
    <RouterView />
  </div>
</template>